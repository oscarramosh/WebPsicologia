import { posts } from "../../../lib/posts";
import Link from "next/link";

export default function Post({ params }: { params: { slug: string } }) {
  
  // versión simple y segura
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="p-20">
        <h1 className="text-xl mb-4">Post no encontrado</h1>

        <Link href="/blog" className="text-[#6b8f62] underline">
          ← Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#fdfcf8] min-h-screen py-20 px-6 md:px-10">

      <div className="max-w-3xl mx-auto">

        <Link
          href="/blog"
          className="inline-block text-sm text-[#6b8f62] mb-6 hover:underline"
        >
          ← Volver al blog
        </Link>

        <h1 className="text-4xl font-serif mb-6">
          {post.title}
        </h1>

        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

      </div>
    </section>
  );
}