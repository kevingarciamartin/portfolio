import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/style.css";
import { ViewTransitions } from "next-view-transitions";
import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var darkmode = localStorage.getItem('darkmode');
                    var theme = darkmode === 'enabled' ? 'dark' : 'light';
                    document.documentElement.classList.add(theme + '-theme');
                  } catch (e) {}
                })();
              `,
            }}
          />
        </head>
        <body suppressHydrationWarning>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
