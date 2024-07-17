import Header from "@/components/header";
import Footer from "@/components/footer";
import { headers } from "next/headers";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headername = headers();
  const fullurl = headername.get("referer") || "";
  const pathname = new URL(fullurl).pathname;
  console.log(pathname);

  return (
    <html id="datatheme" lang="en">
      <body>
        {pathname == "/signup" ? (
          <>
            <div>{children}</div>
          </>
        ) : (
          <>
            <header>
              <Header />
            </header>
            <div>{children}</div>{" "}
            <footer>
              <Footer></Footer>
            </footer>
          </>
        )}
      </body>
    </html>
  );
}
