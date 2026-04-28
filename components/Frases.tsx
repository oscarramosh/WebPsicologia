export default function Frases() {
  const frases = [
    {
      text: "Hasta que lo inconsciente no se haga consciente, seguirá dirigiendo tu vida.",
      author: "Carl Jung",
    },
    {
      text: "Entre el estímulo y la respuesta hay un espacio.",
      author: "Viktor Frankl",
    },
    {
      text: "La salud mental no es ausencia de conflicto, sino capacidad de manejarlo.",
      author: "Sigmund Freud",
    },
  ];

  return (
    <section className="bg-[#4a6741] text-white py-20 px-10 text-center">
      <h2 className="text-4xl font-serif mb-10">
        Palabras que inspiran
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {frases.map((f, i) => (
          <div key={i} className="p-6 border border-white/20 rounded-lg">
            <p className="italic mb-4">{f.text}</p>
            <p className="text-sm opacity-60">— {f.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}