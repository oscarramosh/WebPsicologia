import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Servicios from "../components/Servicios";
import Sobre from "../components/Sobre";
import Frases from "../components/Frases";
import Estudios from "../components/Estudios";
import Reserva from "../components/Reserva";
import Quote from "../components/Quote";
import WhatsAppButton from "../components/WhatsAppButton";
import FloatingCTA from "../components/FloatingCTA";
import Viaje from "../components/Viaje";
import Testimonios from "../components/Testimonios";
import BlogPreview from "../components/BlogPreview";
import FAQ from "../components/FAQ";
import Identificacion from "../components/Identificacion";

export default function Home() {
  return (
    <main className="bg-[#fdfcf8] text-[#2c2c2a]">
      <Navbar />
      <Hero />
      <Viaje />
      <Identificacion />
      <Servicios />
      <FAQ />
      <Frases />
      <Estudios />
      <Quote />
      <Testimonios />
      <Reserva />
      <WhatsAppButton />
      <FloatingCTA />
    </main>
  );
}