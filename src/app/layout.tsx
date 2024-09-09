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
  title: "M2 Agência",
  description: "M2 AGÊNCIA DE MARKETING",
  icons: "/favicon.svg",
  openGraph: {
    title: "M2 Agência",
    description: "M2 AGÊNCIA DE MARKETING",
    url: "https://www.mdois.com.br",
    siteName: "M2 AGÊNCIA DE MARKETING",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/8ecb42c8-43d2-44c6-a7ea-62733d0b229e.png?token=J_diDeCL5cN6UBXPq1jV1qKLXPB7kLYnO_RWpq3WMUk&height=500&width=500&expires=33249190888",
        width: 800,
        height: 600,
      },
      {
        url: "https://opengraph.b-cdn.net/production/documents/8ecb42c8-43d2-44c6-a7ea-62733d0b229e.png?token=J_diDeCL5cN6UBXPq1jV1qKLXPB7kLYnO_RWpq3WMUk&height=500&width=500&expires=33249190888",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "Agência de marketing digital",
    "Desenvolvimento de sites",
    "Desenvolvimento web personalizado",
    "Desenvolvimento de e-commerce",
    "Desenvolvimento de aplicativos web",
    "Redesign de sites",
    "Agência de marketing digital para pequenas empresas",
    "Agência de marketing digital para startups",
    "Consultoria em marketing digital",
    "Serviços de SEO",
    "Web development",
    "Digital marketing agency",
    "Agência de marketing digital perto de mim",
    "Agência de marketing Curitiba",
    "Desenvolvimento web responsivo",
    "SEO para empresas",
    "Custom web development",
    "UX/UI design",
    "SEO local",
    "Consultoria em desenvolvimento web",
  ],
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
