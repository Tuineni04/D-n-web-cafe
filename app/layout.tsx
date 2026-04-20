import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Cafe | Cafe House Style",
  description:
    "Landing page quan cafe voi UX-UI theo huong brand site cua The Coffee House.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#fffaf5] text-[#2f2118]">
        {children}
      </body>
    </html>
  );
}
