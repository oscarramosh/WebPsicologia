import { posts } from "../../../lib/posts";
import Link from "next/link";

export default function Post({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="p-20">
        <h1>Post no encontrado</h1>
        <Link href="/blog">← Volver</Link>
      </div>
    );
  }

  return (
    <section className="bg-[#fdfcf8] min-h-screen py-20 px-6 md:px-10">

      <div className="max-w-3xl mx-auto">

        {/* VOLVER */}
        <Link
          href="/blog"
          className="inline-block text-sm text-[#6b8f62] mb-6 hover:underline"
        >
          ← Volver al blog
        </Link>

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
          {post.title}
        </h1>

        {/* CONTENIDO BONITO */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
          {post.content.split("\n").map((line, i) => {
            // lista
            if (line.trim().startsWith("-")) {
              return (
                <li key={i} className="ml-6 list-disc">
                  {line.replace("-", "").trim()}
                </li>
              );
            }

            // salto de línea vacío
            if (line.trim() === "") {
              return <div key={i} className="h-2" />;
            }

            // texto normal
            return <p key={i}>{line}</p>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-[#f7f5f0] rounded-xl border border-[#e5e3dc]">
          <p className="text-gray-600 mb-4">
            Si esto resuena contigo, puedes comenzar un proceso terapéutico en un espacio seguro.
          </p>

          <a
            href="/#reserva"
            className="inline-block bg-[#4a6741] text-white px-6 py-3 rounded-md hover:bg-[#6b8f62] transition"
          >
            Agendar sesión
          </a>
        </div>

      </div>
    </section>
  );
}