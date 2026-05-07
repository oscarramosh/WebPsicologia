export default function Identificacion() {
  return (
    <section className="bg-[#f7f5f0] py-24 px-6 md:px-10">

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          ¿Te sientes identificado con esto?
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto">
          A veces no sabemos bien cómo explicarlo, pero se siente así:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {[
          { title: "Ansiedad constante", text: "Sientes tensión o preocupación frecuente." },
          { title: "Desborde emocional", text: "Hay momentos en que todo supera." },
          { title: "Pensamientos repetitivos", text: "No puedes dejar de pensar en lo mismo." },
          { title: "Cansancio emocional", text: "Te sientes agotado/a sin razón clara." },
          { title: "Relaciones difíciles", text: "Te cuesta poner límites." },
          { title: "Sensación de vacío", text: "Algo no se siente completo." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-serif text-lg mb-2 text-[#2F3A3F]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}

      </div>

    </section>
  );
}