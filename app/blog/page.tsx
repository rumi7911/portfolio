import { BlogContent } from '@/components/BlogContent';
import { JsonLd } from '@/components/JsonLd';
import { absoluteUrl, author } from '@/content/site';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Writing',
  description:
    'SEO-focused essays on AI operations, agentic workflows, secure automation, macOS utilities, and founder lessons from Cognumi.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Writing — Muhammad Sohaib Roomi',
    description:
      'Essays on AI operations, agentic workflows, secure automation, macOS utilities, and founder lessons from Cognumi.',
    url: absoluteUrl('/blog'),
    type: 'website',
  },
};

export default function Blog() {
  const posts = getAllPosts();
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Writing by Muhammad Sohaib Roomi',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(`/blog/${post.slug}`),
      name: post.title,
      description: post.excerpt,
    })),
    author: {
      '@type': 'Person',
      name: author.name,
    },
  };

  return (
    <div className="space-y-10">
      <JsonLd data={itemListJsonLd} />
      <div className="space-y-4">
        <h1 className="font-mono text-3xl font-semibold">Writing</h1>
        <p className="text-muted leading-relaxed max-w-2xl">
          Thoughts on building AI operations, designing agentic workflows, and
          lessons from moving between cybersecurity and AI.
        </p>
      </div>

      <BlogContent posts={posts} />
    </div>
  );
}
