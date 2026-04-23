import Header from "@/components/Header/Header";
import { RootLayoutContent } from "@/components/RootLayoutContent";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/reset.css";
import "@/styles/style.css";
import { metadataTitle } from "@/utils/constants";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { merchant, ppNeueMontreal } from "./fonts";

export const metadata: Metadata = {
  title: metadataTitle,
  description: "Personal Portfolio of Kevin Garcia Martin",
  icons: {
    icon: [
      {
        url: "/img/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/img/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/img/favicon_io/apple-touch-icon.png",
  },
  manifest: "/img/favicon_io/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const introPlayed = cookieStore.get("intro-played")?.value === "true";
  const theme = cookieStore.get("theme")?.value || "light";
  const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ppNeueMontreal.variable} ${merchant.variable} ${themeClass}`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <RootLayoutContent introPlayed={introPlayed}>
            {children}
          </RootLayoutContent>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
