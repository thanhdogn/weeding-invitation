import { google } from "googleapis";

export async function appendToSheet(data: string[]) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    console.log("Authenticating with:", process.env.GOOGLE_CLIENT_EMAIL);

    const sheets = google.sheets({ version: "v4", auth });

    // 1. Get spreadsheet details to find the correct sheet name
    const metaStruct = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

    const allSheetNames = metaStruct.data.sheets?.map(
      (s) => s.properties?.title,
    );
    console.log("Found sheets:", allSheetNames);

    // Look for a sheet named "Attendance" (case-insensitive, trimmed), otherwise default to the first one
    const sheet =
      metaStruct.data.sheets?.find(
        (s) => s.properties?.title?.trim().toLowerCase() === "attendance",
      ) || metaStruct.data.sheets?.[0];

    const sheetTitle = sheet?.properties?.title;

    if (!sheetTitle) {
      throw new Error("Could not find any sheet in the spreadsheet");
    }

    console.log(`Appending to sheet: ${sheetTitle}`);

    // 2. Read Column A (Names) to find the first empty slot
    // We assume row 1 is header, so we start looking from row 2
    const readResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetTitle}!A2:A`,
    });

    const values = readResponse.data.values || [];

    // Find first rowIndex where value is empty
    // Google Sheets API might return fewer rows than max if they are empty at the end
    // so values.length + 2 is the next empty row (1-based index, +1 for header)

    let targetRow = values.length + 2;

    // Check if there are gaps in the middle
    for (let i = 0; i < values.length; i++) {
      if (!values[i] || values[i].length === 0 || values[i][0] === "") {
        targetRow = i + 2; // +2 because i is 0-indexed and we skipped row 1 (header)
        break;
      }
    }

    console.log(`Found empty slot at Row ${targetRow}`);

    // 3. Update the specific row
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetTitle}!A${targetRow}:D${targetRow}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [data],
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error appending to sheet:", error);
    throw error;
  }
}
