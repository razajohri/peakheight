import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { posts } from "../posts";

type PageProps = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usepeakheight.com";
const appStoreUrl = "https://apps.apple.com/us/app/peak-height/id6752793377";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) {
    return {
      title: "Blog Post Not Found - PeakHeight",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: `${post.title} | PeakHeight Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/${post.slug}`,
      },
      author: {
        "@type": "Organization",
        name: "PeakHeight",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "PeakHeight",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/assets/peakheight-logo.png`,
        },
      },
      keywords: post.keywords.join(", "),
    },
    ...(post.faq && post.faq.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <script
          type="application/ld+json"
          // JSON-LD must be a string for injection.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="border-b border-border bg-muted/20">
          <div className="container px-4 md:px-6 py-10 md:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mt-4 mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-6">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl space-y-8">
              <p className="text-lg text-foreground/90">{post.hero}</p>

              {post.sections.map((section) => (
                <div key={section.heading} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-semibold font-playfair">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              {post.faq && post.faq.length > 0 ? (
                <div className="space-y-4 pt-4">
                  <h2 className="text-2xl md:text-3xl font-semibold font-playfair">
                    Frequently Asked Questions
                  </h2>
                  {post.faq.map((item) => (
                    <div key={item.question} className="rounded-xl border border-border p-5">
                      <p className="font-semibold mb-2">{item.question}</p>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {relatedPosts.length > 0 ? (
                <div className="space-y-4 pt-4">
                  <h2 className="text-2xl md:text-3xl font-semibold font-playfair">
                    Related articles
                  </h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {relatedPosts.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="rounded-xl border border-border p-4 hover:border-primary/50 transition-colors"
                      >
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.date} • {item.readTime}
                        </p>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <h2 className="text-2xl font-semibold font-playfair">
                  Build your height growth routine with PeakHeight
                </h2>
                <p className="text-muted-foreground">
                  Track posture, exercises, nutrition, and sleep in one place. Stay
                  consistent with daily routines designed to help you grow taller naturally.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90"
                  >
                    Explore the app
                  </Link>
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:border-primary/50"
                  >
                    Download on the App Store
                  </a>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Disclaimer: This content is for informational purposes only and is not
                medical advice. Individual results vary based on age, genetics, and
                health factors.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
