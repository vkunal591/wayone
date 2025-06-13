// components/JsonLd.tsx
"use client";
import Head from "next/head";

const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Wayone IT Solutions",
    "alternateName": "Wayone IT Solutions",
    "url": "https://wayone.co.in/",
    "logo": "https://wayone.co.in/assets/images/logo.png",
    "sameAs": [
      "https://www.instagram.com/wayone.india",
      "https://www.facebook.com/wayone.india"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9889988909",
      "contactType": "Customer Support",
      "areaServed": "India",
      "availableLanguage": ["English", "Hindi"]
    },
    "founder": {
      "@type": "Person",
      "name": "Amit Gupta"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9 Laxmi Garden, 2nd floor above ICICI bank, Shivaji marg",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110015",
      "addressCountry": "IN"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default JsonLd;
