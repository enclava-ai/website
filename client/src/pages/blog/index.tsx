import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link } from "wouter";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            {posts.length === 0 ? (
              <div className="text-center py-20 border border-white/10 bg-white/[0.02]">
                <p className="text-muted-foreground text-lg">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid gap-px bg-white/10 border border-white/10">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="bg-background p-10 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <time className="text-sm text-muted-foreground font-mono">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-2 ml-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-0.5 bg-primary/10 text-primary font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <h2 className="text-2xl font-display font-medium text-white mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                        {post.description}
                      </p>

                      <div className="flex items-center text-sm text-white group-hover:text-primary transition-colors">
                        Read more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
