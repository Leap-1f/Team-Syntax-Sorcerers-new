import { ReactNode } from "react";
import { Header, Footer } from "@/components/admin/Header";
export default function adminLayout({ children }: { children: ReactNode }) {
  return (
    <body className="flex flex-col w-[100vw] h-[100vh] overflow-hidden flex-shrink">
      <Header />
      {children}
      <Footer />
    </body>
  );
}
