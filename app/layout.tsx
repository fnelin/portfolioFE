import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, DM_Mono } from 'next/font/google'
import "./globals.css";
import TopBar from "@/components/ui/header"
import BottomBar from "@/components/ui/footer"

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-heading',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "Portfolio showcase",
  description: "Created for solo project as part in the Lexicon Frontend developer program",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${jakarta.variable} ${dmMono.variable} antialiased`}
      ><header>
          <TopBar />
        </header>
        {children}
        {modal}
        <footer>
          <BottomBar />
        </footer>
      </body>
    </html>
  );
}
