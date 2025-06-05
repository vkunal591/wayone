import type { Metadata } from "next";
import { Cabin, Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Wayone",
  description: "",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WayOne IT Solutions",
  "url": "https://wayone.co.in/",
  "logo": "https://wayone.co.in/assets/images/logo.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91 7599 9903 31",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91 9889 9889 09",
      "contactType": "technical support",
      "contactOption": "TollFree",
      "areaServed": "IN",
      "availableLanguage": "en"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/wayone.india",
    "https://www.instagram.com/wayone.india",
    "https://wayone.co.in/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${cabin.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
