import "./globals.css";
import { Caveat } from "next/font/google";
import AddAnimation from "@/components/Shared/AddAnimation";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header/Header";
import ScrollToTop from "@/components/Shared/ScrollToTop";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata = {
  metadataBase: new URL('https://pta-training.lu'),
  title: {
    default: "PTA - Personal Training Academy | Heiderscheid, Luxembourg",
    template: "%s | PTA Training Luxembourg",
  },
  description: "Deine Personal Training Academy in Luxembourg - Functional Training, Rehabilitation und mehr. Für jeden Körper, für jedes Ziel.",
  keywords: ["Personal Training", "Fitness Luxembourg", "Personal Trainer Heiderscheid", "Ernährungsberatung", "Gruppentraining"],
  authors: [{ name: "PTA Training" }],
  creator: "PTA Personal Training Academy",
  publisher: "PTA Training",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PTA - Personal Training Academy Luxembourg",
    description: "Deine Personal Training Academy in Luxembourg - Functional Training, Rehabilitation und mehr. Für jeden Körper, für jedes Ziel.",
    url: "https://pta-training.lu",
    siteName: "PTA Training",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://pta-training.lu/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PTA Personal Training Academy Luxembourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PTA - Personal Training Academy Luxembourg",
    description: "Deine Personal Training Academy in Luxembourg - Functional Training, Rehabilitation und mehr.",
    images: ["https://pta-training.lu/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pta-training.lu/#organization",
  "name": "PTA - Personal Training Academy",
  "alternateName": "PTA Training Luxembourg",
  "description": "Deine Personal Training Academy in Luxembourg - Functional Training, Rehabilitation und mehr. Für jeden Körper, für jedes Ziel.",
  "url": "https://pta-training.lu",
  "logo": "https://pta-training.lu/images/pta-logo.svg",
  "image": "https://pta-training.lu/images/gym-interior-wide.jpg",
  "telephone": "+352 691 789 483",
  "email": "info@pta-training.lu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Fuussekaul",
    "addressLocality": "Heiderscheid",
    "postalCode": "9156",
    "addressCountry": "LU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.8876",
    "longitude": "5.9772"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "priceRange": "€€",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "49.8876",
      "longitude": "5.9772"
    },
    "geoRadius": "50000"
  },
  "sameAs": [
    "https://www.facebook.com/PTAlTraining",
    "https://www.instagram.com/pta.training"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+352 691 789 483",
    "contactType": "customer service",
    "email": "info@pta-training.lu",
    "availableLanguage": ["German", "French", "English", "Luxembourgish"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fitness Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Training",
          "description": "Individuelles Personal Training für Muskelaufbau, Gewichtsreduktion und Fitness"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ernährungsberatung",
          "description": "Professionelle Ernährungsberatung für nachhaltige Ergebnisse"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gruppentraining",
          "description": "Motivierendes Training in kleinen Gruppen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fitness Bootcamp",
          "description": "Intensives 4-Wochen Transformationsprogramm"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rehabilitation",
          "description": "Professionelles Aufbautraining nach Verletzung oder OP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sportmannschaften",
          "description": "Athletiktraining für Sportteams"
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={caveat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-clr_base focus:text-clr_title focus:px-4 focus:py-2 focus:rounded"
        >
          Zum Hauptinhalt springen
        </a>
        <ScrollToTop />
        <AddAnimation/>
        <Header/>
        <main id="main-content">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
