export default function Estudios() {
  return (
    <section className="py-28 px-6 md:px-10 bg-[#fdfcf8]" id="investigacion">
      
      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Investigación reciente
        </h2>

        <p className="text-gray-500 leading-relaxed">
          La psicoterapia cuenta con amplio respaldo científico. Estos estudios
          reflejan la efectividad de distintos enfoques terapéuticos.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* 1 */}
        <div className="p-8 bg-white border border-[#e5e3dc] rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="font-serif text-xl mb-3">
            Terapia online efectiva
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            La terapia psicológica online ha demostrado ser comparable en eficacia 
            a la presencial para tratar ansiedad y depresión.
          </p>

          <p className="text-xs text-gray-400">
            Andersson et al., 2014 · Clinical Psychology Review
          </p>
        </div>

        {/* 2 */}
        <div className="p-8 bg-white border border-[#e5e3dc] rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="font-serif text-xl mb-3">
            Mindfulness y depresión
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Intervenciones basadas en mindfulness pueden reducir recaídas en depresión 
            recurrente hasta en un 40–50%.
          </p>

          <p className="text-xs text-gray-400">
            Kuyken et al., 2016 · The Lancet Psychiatry
          </p>
        </div>

        {/* 3 */}
        <div className="p-8 bg-white border border-[#e5e3dc] rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="font-serif text-xl mb-3">
            Terapia cognitivo-conductual
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            La TCC es uno de los tratamientos más efectivos para trastornos de ansiedad 
            y depresión, respaldado por múltiples metaanálisis.
          </p>

          <p className="text-xs text-gray-400">
            Hofmann et al., 2012 · Cognitive Therapy and Research
          </p>
        </div>

        {/* 4 */}
        <div className="p-8 bg-white border border-[#e5e3dc] rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="font-serif text-xl mb-3">
            Relación terapéutica
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            El vínculo entre terapeuta y paciente es uno de los factores más 
            determinantes en el éxito del proceso terapéutico.
          </p>

          <p className="text-xs text-gray-400">
            Horvath et al., 2011 · Psychotherapy
          </p>
        </div>

      </div>
    </section>
  );
}