import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link, useParams, Redirect } from "wouter";
import { getPostBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getPostBySlug(params.slug || "");

  if (!post) {
    return <Redirect to="/blog" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <article className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>

              <header className="mb-12 pb-12 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time className="font-mono">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.description}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-display font-bold text-white mt-12 mb-6">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-display font-bold text-white mt-10 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-display font-semibold text-white mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {children}
                      </p>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-primary hover:underline"
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {children}
                      </a>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-300">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-300">{children}</li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-gray-400">
                        {children}
                      </blockquote>
                    ),
                    code: ({ className, children, ...props }) => {
                      const isInline = !className;
                      if (isInline) {
                        return (
                          <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-primary">
                            {children}
                          </code>
                        );
                      }
                      return (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    pre: ({ children }) => (
                      <pre className="bg-card border border-white/10 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
                        {children}
                      </pre>
                    ),
                    hr: () => <hr className="border-white/10 my-12" />,
                    img: ({ src, alt }) => (
                      <img
                        src={src}
                        alt={alt}
                        className="rounded-lg border border-white/10 my-8"
                      />
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse border border-white/10">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className="border border-white/10 px-4 py-2 bg-white/5 text-left font-semibold">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="border border-white/10 px-4 py-2">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
