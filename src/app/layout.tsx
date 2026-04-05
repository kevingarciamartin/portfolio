import ClientLayout from "@/components/ClientLayout";
import "@/styles/fonts.css";
import "@/styles/reset.css";
import "@/styles/style.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
