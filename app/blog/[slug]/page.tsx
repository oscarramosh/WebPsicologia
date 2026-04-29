import { posts } from "../../../lib/posts";
import Link from "next/link";

export default function Post({ params }: any) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div className="p-10">Post no encontrado</div>;

  return (
    <section className="bg-[#fdfcf8] min-h-screen py-20 px-6 md:px-10">

      <div className="max-w-3xl mx-auto">

        {/* VOLVER */}
        <Link
          href="/blog"
          className="text-sm text-gray-400 hover:text-[#6b8f62] transition"
        >
          ← Volver
        </Link>

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-serif mt-6 mb-8 leading-tight">
          {post.title}
        </h1>

        {/* CONTENIDO */}
        <div className="text-gray-600 leading-relaxed whitespace-pre-line space-y-4 text-lg">
          {post.content}
        </div>

        {/* CTA */}
        <div className="mt-14 p-6 bg-[#f7f5f0] rounded-xl border border-[#e5e3dc]">
          <p className="text-gray-600 mb-4">
            Si esta pregunta conecta contigo, puedes comenzar un proceso terapéutico en un espacio seguro y acompañado.
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