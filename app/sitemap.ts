import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://peakheight.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    ...blogEntries,
  ];
}
