"use client";

import { ViewTransitions } from "next-view-transitions";
import { usePathname } from "next/navigation";
import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/style.css";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          {!isAdmin && <Header />}
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
