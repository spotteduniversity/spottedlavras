import type { Metadata, Viewport } from "next";
import { Bungee, Roboto } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lavras Spotted - O que acontece no campus vem parar aqui",
  description: "Viu alguma fofoca, flerte? Mande aqui anonimamente para o @lavras_spotted",
  openGraph: {
    title: "Lavras Spotted",
    description: "O que acontece no campus vem parar aqui",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`min-h-screen bg-surface text-white antialiased ${bungee.variable} ${roboto.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
