import { Dancing_Script, Playpen_Sans } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer";

const lavishlyYours = Dancing_Script({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-lavishly-yours", // Keeping variable name to avoid refactoring all CSS
  display: "swap",
});

const playpenSans = Playpen_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playpen-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thanh & Partner - Wedding Invitation",
  description: "Join us in celebrating our special day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Story+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${lavishlyYours.variable} ${playpenSans.variable}`}>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
