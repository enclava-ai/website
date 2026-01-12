import fm from "front-matter";

interface FrontMatter {
  title?: string;
  date?: string;
  description?: string;
  author?: string;
  tags?: string[];
  slug?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  author?: string;
  tags?: string[];
}

// Import all markdown files from the content/blog directory
const blogFiles = import.meta.glob("../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parsePost(filename: string, raw: string): BlogPost {
  const { attributes, body } = fm<FrontMatter>(raw);

  // Extract slug from filename (e.g., ../../content/blog/my-post.md -> my-post)
  const slug = attributes.slug || filename.replace(/^.*\/content\/blog\//, "").replace(/\.md$/, "");

  return {
    slug,
    title: attributes.title || "Untitled",
    date: attributes.date || new Date().toISOString(),
    description: attributes.description || "",
    content: body,
    author: attributes.author,
    tags: attributes.tags,
  };
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(blogFiles).map(([filename, content]) =>
    parsePost(filename, content)
  );

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}
