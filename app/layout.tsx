import type { Metadata } from "next";
import { Montserrat, Inconsolata } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "Annus Zulfiqar",
  description: "PhD candidate in Computer Science and Engineering at the University of Michigan, Ann Arbor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inconsolata.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
