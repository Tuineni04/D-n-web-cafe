import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Cafe | Roastery Lounge",
  description:
    "Landing page quán cafe cao cấp với bố cục khoa học, nhiều điểm chạm tương tác và chuyển động mượt mà.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0f0a08] text-[#f8efe4]">
        {children}
      </body>
    </html>
  );
}
