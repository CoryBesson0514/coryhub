import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cory Besson",
  description:
    "LittleWhiteUp, créations digitales, projets personnels et portfolio de Cory Besson.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
