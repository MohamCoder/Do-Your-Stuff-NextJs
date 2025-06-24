import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do Your Stuff",
  description: "deadline based todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
