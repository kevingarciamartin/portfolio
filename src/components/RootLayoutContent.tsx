"use client";

import ClientLayout from "@/components/ClientLayout";
import Intro from "@/components/Intro/Intro";
import { TransitionProvider } from "@/components/TransitionProvider";
import { useBodyLock } from "@/hooks/useBodyLock";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function RootLayoutContent({
  children,
  introPlayed,
}: {
  children: React.ReactNode;
  introPlayed: boolean;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const [showIntro, setShowIntro] = useState(!introPlayed && !isAdmin);

  const handleIntroFinish = () => {
    setShowIntro(false);
    document.cookie = "intro-played=true; path=/; max-age=1800; sameSite=Lax";
  };

  const isIntroVisible = showIntro && !isAdmin;
  useBodyLock(isIntroVisible);

  return (
    <>
      <AnimatePresence>
        {isIntroVisible && <Intro onFinish={handleIntroFinish} key="intro" />}
      </AnimatePresence>
      <TransitionProvider>
        <ClientLayout>{children}</ClientLayout>
      </TransitionProvider>
    </>
  );
}
