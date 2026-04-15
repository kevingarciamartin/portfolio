"use client";

import ClientLayout from "@/components/ClientLayout";
import { FrozenRouter } from "@/components/FrozenRouter";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <FrozenRouter key={pathname}>
        <ClientLayout>{children}</ClientLayout>
      </FrozenRouter>
    </AnimatePresence>
  );
}
