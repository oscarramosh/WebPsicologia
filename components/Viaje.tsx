"use client";

export default function Viaje() {
  const etapas = [
    {
      titulo: "La mente no se detiene",
      texto:
        "La ansiedad no siempre se ve, pero se siente en cada pensamiento que no descansa.",
      video: "/videos/ocean.mp4",
    },
    {
      titulo: "Comienzas a entenderte",
      texto:
        "Poco a poco, todo empieza a tener sentido. Nombrar lo que sientes ya es un avance.",
      video: "/videos/sunrise.mp4",
    },
    {
      titulo: "El cambio es posible",
      texto:
        "Cuando te comprendes, puedes transformar tu forma de vivir y relacionarte contigo.",
      video: "/videos/forest.mp4",
    },
  ];

  return (
    <section>
      {etapas.map((e, i) => (
        <div
          key={i}
          className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden"
        >
          {/* VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={e.video} type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          {/* TEXTO */}
          <div className="relative z-10 text-center max-w-2xl px-6">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              {e.titulo}
            </h2>
            <p className="text-lg opacity-90">
              {e.texto}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}