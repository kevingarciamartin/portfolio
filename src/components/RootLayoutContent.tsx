"use client";

import ClientLayout from "@/components/ClientLayout";
import { TransitionProvider } from "@/components/TransitionProvider";

export function RootLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <ClientLayout>{children}</ClientLayout>
    </TransitionProvider>
  );
}
