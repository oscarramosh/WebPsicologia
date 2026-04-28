export default function Estudios() {
  return (
    <section className="py-20 px-10 bg-[#fdfcf8]" id="investigacion">
      <h2 className="text-4xl font-serif mb-10">
        Investigación reciente
      </h2>

      <div className="space-y-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-serif text-xl mb-2">
            Terapia online efectiva
          </h3>
          <p className="text-gray-500">
            Estudios muestran que la terapia online es igual de efectiva que la presencial.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-serif text-xl mb-2">
            Mindfulness y depresión
          </h3>
          <p className="text-gray-500">
            Reduce recaídas hasta en un 40%.
          </p>
        </div>
      </div>
    </section>
  );
}