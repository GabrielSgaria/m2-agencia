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
        url: "/favicon.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/favicon.svg",
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
    "Desenvolvedor front-end",
    "Desenvolvimento web",
    "Front-end",
    "HTML",
    "CSS",
    "JavaScript",
    "Framework React",
    "UX/UI design",
    "Responsividade",
    "Integração de APIs",
    "Otimização de desempenho",
    "Interatividade",
    "Acessibilidade web",
    "SEO (Otimização para mecanismos de busca)",
    "Usabilidade",
    "Experiência do usuário",
    "Design responsivo",
    "Layouts adaptáveis",
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
