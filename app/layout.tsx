import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "ALR Bathrooms | Bathroom Design & Installation Surrey",
    template: "%s | ALR Bathrooms",
  },
  description:
    "Expert bathroom design and installation in Surrey. Serving Shepperton, Cobham, Esher, Guildford, Woking, Richmond, Wimbledon & Kingston. Free estimates. Call 07934 679117.",
  keywords: [
    "bathroom installation Surrey",
    "bathroom design Surrey",
    "bathroom fitters Shepperton",
    "bathroom renovation Cobham",
    "bathroom installer Esher",
    "bathroom fitting Guildford",
    "bathroom renovation Woking",
    "bathroom design Richmond",
    "bathroom fitters Wimbledon",
    "bathroom installation Kingston",
    "ALR Bathrooms",
  ],
  authors: [{ name: "ALR Bathrooms" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.alrbathrooms.com",
    siteName: "ALR Bathrooms",
    title: "ALR Bathrooms | Bathroom Design & Installation Surrey",
    description:
      "Expert bathroom design and installation across Surrey. Free estimates. Call 07934 679117.",
  },
  metadataBase: new URL("https://www.alrbathrooms.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBM3ZKW2');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBM3ZKW2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
