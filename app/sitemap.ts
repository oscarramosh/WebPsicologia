import { posts } from "../lib/posts";

export default function sitemap() {
  const staticUrls = [
    {
      url: "https://larutadeunapsicologa.com",
      lastModified: new Date(),
    },
    {
      url: "https://larutadeunapsicologa.com/agenda",
      lastModified: new Date(),
    },
    {
      url: "https://larutadeunapsicologa.com/contacto",
      lastModified: new Date(),
    },
    {
      url: "https://larutadeunapsicologa.com/comentarios",
      lastModified: new Date(),
    },
    {
      url: "https://larutadeunapsicologa.com/blog",
      lastModified: new Date(),
    },
  ];

  const postUrls = posts.map((post) => ({
    url: `https://larutadeunapsicologa.com/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...postUrls];
}