import { posts } from "../blog/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://peakheight.app";

export function GET() {
  const items = posts
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`;
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postUrl}</link>
          <guid>${postUrl}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.description}]]></description>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>PeakHeight Blog</title>
        <link>${siteUrl}/blog</link>
        <description>Science-informed height growth tips, exercises, nutrition, and sleep.</description>
        ${items}
      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
    },
  });
}
