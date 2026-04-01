"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
      <Footer />
    </ThemeProvider>
  );
}
