import "./globals.css";
import AddAnimation from "@/Components/Shared/AddAnimation";
import Footer from "@/Components/Shared/Footer";
import Header from "@/Components/Shared/Header/Header";
import ScrollToTop from "@/Components/Shared/ScrollToTop";


export const metadata = {
  metadataBase: new URL('https://pta-training.lu'),
  title: {
    default: "PTA - Personal Training Academy | Heiderscheid, Luxembourg",
    template: "%s | PTA Training Luxembourg",
  },
  description: "Deine Personal Training Academy in Luxembourg - Functional Training, Rehabilitation und mehr. Für jeden Körper, für jedes Ziel.",
  keywords: ["Personal Training", "Fitness", "Luxembourg", "Luxemburg", "Heiderscheid", "Ernährungsberatung", "Gruppentraining", "Rehabilitation", "Bootcamp"],
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
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop",
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
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop"],
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
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pta-training.lu/#organization",
  "name": "PTA - Personal Training Academy",
  "alternateName": "PTA Training Luxembourg",
  "description": "Deine Personal Training Academy in Luxembourg - Functional Training, Rehabilitation und mehr. Für jeden Körper, für jedes Ziel.",
  "url": "https://pta-training.lu",
  "logo": "https://pta-training.lu/img/logo.png",
  "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop",
  "telephone": "+352 123 456 789",
  "email": "info@pta-training.lu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hauptstraße 1",
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
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "18:00"
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
    "https://www.facebook.com/ptatraining",
    "https://www.instagram.com/ptatraining"
  ],
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
    <html lang="de">
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
        <ScrollToTop />
        <AddAnimation/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
