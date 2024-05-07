import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <UserProvider>
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </UserProvider>
      </html>
    </>
  );
}
