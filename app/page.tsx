import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Servicios from "../components/Servicios";
import Sobre from "../components/Sobre";
import Frases from "../components/Frases";
import Estudios from "../components/Estudios";
import Reserva from "../components/Reserva";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import WhatsAppButton from "../components/WhatsAppButton";
import FloatingCTA from "../components/FloatingCTA";
import Viaje from "../components/Viaje";

export default function Home() {
  return (
    <main className="bg-[#fdfcf8] text-[#2c2c2a]">
      <Navbar />
      <Hero />
      <Viaje />
      <Servicios />
      <Sobre />
      <Frases />
      <Estudios />
      <Quote />
      <Reserva />
      <Footer />
      <WhatsAppButton />
      <FloatingCTA />
    </main>
  );
}