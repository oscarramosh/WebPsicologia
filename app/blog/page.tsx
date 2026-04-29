import { posts } from "../../lib/posts";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="bg-[#fdfcf8] min-h-screen py-20 px-6 md:px-10">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
            Blog
          </p>

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Reflexiones
          </h1>

          <p className="text-gray-500 max-w-xl">
            Un espacio para comprender emociones, procesos terapéuticos
            y preguntas frecuentes sobre salud mental.
          </p>
        </div>

        {/* LISTADO */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>

              <div className="group p-6 bg-white border border-[#e5e3dc] rounded-xl hover:shadow-md transition cursor-pointer">

                <h2 className="text-xl font-serif mb-2 group-hover:text-[#6b8f62] transition">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-400">
                  Leer respuesta →
                </p>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}