"use client";

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
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

  useEffect(() => {
    const body = document.body;

    if (showIntro) {
      body.style.overflow = "hidden";
      body.setAttribute("data-lenis-prevent", "true");
    } else {
      body.style.overflow = "visible";
      body.removeAttribute("data-lenis-prevent");
    }
  }, [showIntro]);

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
