import { posts } from "../../../lib/posts";

export default function Post({ params }: any) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>Post no encontrado</div>;

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-serif mb-6">{post.title}</h1>

      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
}