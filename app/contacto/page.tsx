export default function Contacto() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-serif mb-6">
        Agenda tu sesión
      </h1>

      <p className="text-gray-600 mb-8">
        Elige un horario disponible y confirma tu sesión en línea.
      </p>

      <iframe
        src="https://calendly.com/TU-USUARIO"
        className="w-full h-[600px] border rounded"
      />
    </div>
  );
}