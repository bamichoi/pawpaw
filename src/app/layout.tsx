import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PawPaw",
  description: "Happy Pet Walk!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
