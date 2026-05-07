"use client";

export default function VideoSecundario() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">

      {/* VIDEO (SOLO EL SEGUNDO) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/sunrise.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* TEXTO */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Comienzas a entenderte
        </h2>

        <p className="text-lg opacity-90">
          Poco a poco, todo empieza a tener sentido. Nombrar lo que sientes ya es un avance.
        </p>
      </div>

    </section>
  );
}