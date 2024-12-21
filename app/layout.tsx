import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";



const spartan = League_Spartan({ 
  subsets: ["latin"],
  weight: ['300', "400", '500', '600', '700'],
  variable: '--font-leagueSpartan'
});

export const metadata: Metadata = {
  title: "Easy Keys",
  description: "A place to call home",
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  userScalable: false,

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spartan.variable} antialiased`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
