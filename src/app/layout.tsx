import ClientLayout from "@/components/ClientLayout";
import "@/styles/reset.css";
import "@/styles/fonts.css";
import "@/styles/style.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Kevin Garcia Martin — Developer x Engineer",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `<script>(function(){try{var d=localStorage.getItem('darkmode');var t=d==='enabled'?'dark':'light';document.documentElement.classList.add(t+'-theme');}catch(e){}})();</script>`,
          }}
        />
        <body suppressHydrationWarning>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
