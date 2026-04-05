"use client";

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <ThemeProvider>
      {isAdmin ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1 }}>
          <Header />
          {children}
          <Contact />
          <Footer />
        </ReactLenis>
      )}
    </ThemeProvider>
  );
}
