import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, side, attendance } = body;

    if (!name || !attendance || !side) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Map to columns:
    // A: Name
    // B: Attendance (TRUE/FALSE)
    // C: Groom Side (TRUE if side === 'groom')
    // D: Bride Side (TRUE if side === 'bride')
    const isAttending = attendance === "yes";
    const isGroomSide = side === "groom";
    const isBrideSide = side === "bride";

    // Google Sheets boolean checkboxes use TRUE/FALSE
    const rowData = [name, isAttending, isGroomSide, isBrideSide];

    await appendToSheet(rowData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RSVP Error:", error);
    return NextResponse.json(
      { error: "Failed to submit RSVP" },
      { status: 500 },
    );
  }
}
