import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/i18n/context";

export const metadata: Metadata = {
  title: "Jahaji — Shaping Your Shipping",
  description: "Bangladesh's first app for lighter ships. Book bulkhead vessels, track in real time and trade onboard cargo — all from one shipping app.",
  openGraph: {
    title: "Jahaji — Shaping Your Shipping",
    description: "Bulkhead booking, live ship tracking and an onboard marketplace for inland Bangladesh.",
    type: "website",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
