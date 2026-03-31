"use client";

import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/style.css";
import { ViewTransitions } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var darkmode = localStorage.getItem('darkmode');
                    var theme = darkmode === 'enabled' ? 'dark' : 'light';
                    document.body.classList.add(theme + '-theme');
                  } catch (e) {}
                })();
              `,
            }}
          />
        </head>
        <body suppressHydrationWarning>
          <ThemeProvider>
            {!isAdmin && <Header />}
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
