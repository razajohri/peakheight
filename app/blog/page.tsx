import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "PeakHeight Blog - Height Growth Tips, Exercises, and Nutrition",
  description:
    "Explore science-informed tips on height growth, posture, exercises, nutrition, and sleep. Practical guides to help you grow taller naturally.",
  keywords: [
    "height growth blog",
    "grow taller naturally",
    "height increase exercises",
    "posture correction",
    "height growth app",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "PeakHeight Blog - Height Growth Tips, Exercises, and Nutrition",
    description:
      "Science-informed tips on posture, exercises, nutrition, and sleep for natural height potential.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                PeakHeight Blog
              </p>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                Height Growth Tips, Backed by Practical Habits
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn how posture, exercises, nutrition, and sleep work together to
                help you maximize your natural height potential.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-semibold font-playfair mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
