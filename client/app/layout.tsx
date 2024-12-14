import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super Cloths",
  description: "Super Cloths is a clothing store, where you can buy clothes",
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
