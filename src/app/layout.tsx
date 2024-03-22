import type { Metadata } from "next";
import { Bebas_Neue, Saira_Extra_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebasNeue",
});
const saira = Saira_Extra_Condensed({
  subsets: ["latin"],
  weight: "300",
  variable: "--saira",
});

export const metadata: Metadata = {
  title: "M2 AGENCIA",
  description: "M2 AGENCIA DE MARKETING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${saira.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>

  );
}
