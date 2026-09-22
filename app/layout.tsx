import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL("https://larutadeunapsicologa.com"),

  title: "Psicóloga Online en Chile | Paulina Hernández",
  
  description:
    "Psicóloga clínica online en Chile. Acompañamiento en ansiedad, depresión y bienestar emocional. Agenda tu sesión online.",

  keywords: [
    "psicóloga online Chile",
    "terapia online Chile",
    "psicóloga Santiago",
    "ansiedad terapia",
    "depresión psicóloga",
    "bienestar emocional",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Psicóloga Online en Chile | Paulina Hernández",
    description:
      "Acompañamiento terapéutico online en ansiedad, depresión y bienestar emocional.",
    url: "https://larutadeunapsicologa.com",
    siteName: "La Ruta de una Psicóloga",
    locale: "es_CL",
    type: "website",
  },
};

// Sin dirección física: la atención es 100% online en todo Chile, así que no declaramos un
// LocalBusiness con domicilio (sería falso) — ProfessionalService + areaServed es el tipo
// correcto para un servicio remoto dirigido a un país/ciudad, sin inventar una ubicación.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "La Ruta de una Psicóloga — Paulina Hernández",
  description:
    "Psicóloga clínica online en Chile. Acompañamiento en ansiedad, depresión y bienestar emocional.",
  url: "https://larutadeunapsicologa.com",
  image: "https://larutadeunapsicologa.com/pauli.jpeg",
  sameAs: ["https://youtube.com/@larutadeunapsicologa"],
  areaServed: [
    { "@type": "Country", name: "Chile" },
    { "@type": "City", name: "Santiago" },
  ],
  serviceType: "Psicoterapia online",
  provider: {
    "@type": "Person",
    name: "Paulina Hernández",
    jobTitle: "Psicóloga clínica",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {children}

        {/* Calendly */}
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>

        <Footer />
      </body>
    </html>
  );
}