import { posts } from "../../../lib/posts";
import Link from "next/link";

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  // DEBUG (puedes borrar después)
  console.log("SLUG:", params.slug);
  console.log("POST:", post);

  if (!post) {
    return (
      <div className="p-20">
        <h1>Post no encontrado</h1>
        <Link href="/blog">Volver al blog</Link>
      </div>
    );
  }

  return (
    <section className="bg-[#fdfcf8] min-h-screen py-20 px-6 md:px-10">

      <div className="max-w-3xl mx-auto">

        <Link href="/blog" className="text-sm text-gray-400">
          ← Volver
        </Link>

        <h1 className="text-4xl font-serif mt-6 mb-6">
          {post.title}
        </h1>

        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

      </div>
    </section>
  );
}