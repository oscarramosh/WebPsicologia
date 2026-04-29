import { posts } from "../lib/posts";
import Link from "next/link";

export default function BlogPreview() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#f7f5f0]">

      {/* HEADER */}
      <div className="mb-12">
        <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
          Blog
        </p>

        <h2 className="text-4xl font-serif mb-4">
          Preguntas frecuentes
        </h2>

        <p className="text-gray-500 max-w-xl">
          Respuestas a dudas comunes sobre procesos terapéuticos y bienestar emocional.
        </p>
      </div>

      {/* POSTS */}
      <div className="grid md:grid-cols-3 gap-6">

        {posts.slice(0, 3).map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="p-6 bg-white border border-[#e5e3dc] rounded-xl hover:shadow-md transition cursor-pointer">
              <h3 className="font-serif mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400">Leer →</p>
            </div>
          </Link>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link href="/blog" className="text-[#6b8f62] underline">
          Ver todas las preguntas →
        </Link>
      </div>

    </section>
  );
}