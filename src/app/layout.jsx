import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata = {
  title: "Weather-app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-zinc-900 text-white h-full flex flex-col'}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
