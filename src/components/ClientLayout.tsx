"use client";

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import { useBodyLock } from "@/hooks/useBodyLock";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isWorkItem = pathname?.startsWith("/work/") && pathname !== "/work";

  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      return;
    }

    const introPlayed = sessionStorage.getItem("intro-played");
    if (!introPlayed) {
      requestAnimationFrame(() => setShowIntro(true));
    }
  }, [isAdmin]);

  useBodyLock(showIntro);

  const handleIntroFinish = () => {
    setShowIntro(false);
    sessionStorage.setItem("intro-played", "true");
  };

  return (
    <>
      {isAdmin ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1 }}>
          <AnimatePresence>
            {showIntro && <Intro onFinish={handleIntroFinish} key="intro" />}
          </AnimatePresence>
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
