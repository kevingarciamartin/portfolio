"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Contact from "./Contact/Contact";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <ThemeProvider>
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && (
        <>
          <Contact />
          <Footer />
        </>
      )}
      {/* {!isAdmin && >} */}
    </ThemeProvider>
  );
}
