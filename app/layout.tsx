import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Act On Asthma WAD 2026 Doctor DP Maker",
  description: "Create World Asthma Day doctor display pictures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
