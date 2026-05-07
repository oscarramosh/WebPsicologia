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

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
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