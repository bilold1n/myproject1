import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="datatheme" lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <div>{children}</div>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
