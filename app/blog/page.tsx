import { posts } from "../../lib/posts";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-serif mb-10">Reflexiones</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="border p-6 rounded-lg hover:shadow-md transition cursor-pointer">
              <h2 className="text-xl font-serif mb-2">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}