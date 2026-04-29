import { posts } from "../../../lib/posts";
import Link from "next/link";

export default function Post({ params }: { params: { slug: string } }) {
  
  // FIX robusto del slug
  const post = posts.find(
    (p) =>
      p.slug.trim().toLowerCase() === params.slug.trim().toLowerCase()
  );

  if (!post) {
    return (
      <div className="p-20">
        <h1 className="text-xl mb-4">Post no encontrado</h1>

        <Link
          href="/blog"
          className="text-[#6b8f62] underline"
        >
          ← Volver al blog
        </Link>
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

        {/* CONTENIDO */}
        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

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