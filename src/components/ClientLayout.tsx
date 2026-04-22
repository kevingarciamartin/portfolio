"use client";

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isWorkItem = pathname?.startsWith("/work/") && pathname !== "/work";

  return (
    <>
      {isAdmin ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1 }}>
          <main>{children}</main>
          {!isWorkItem && (
            <>
              <Contact />
              <Footer />
            </>
          )}
        </ReactLenis>
      )}
    </>
  );
}
