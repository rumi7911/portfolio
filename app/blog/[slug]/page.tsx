import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { JsonLd } from '@/components/JsonLd';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { absoluteUrl, author } from '@/content/site';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.date,
      authors: [author.name],
      tags: post.tags,
      images: [
        {
          url: absoluteUrl('/headshot.jpg'),
          width: 600,
          height: 800,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [absoluteUrl('/headshot.jpg')],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: author.name,
      url: absoluteUrl('/about'),
    },
    publisher: {
      '@type': 'Person',
      name: author.name,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl('/headshot.jpg'),
    keywords: post.tags?.join(', '),
  };

  return (
    <article className="space-y-8">
      <JsonLd data={articleJsonLd} />
      <div className="space-y-4">
        <Link
          href="/blog"
          className="text-sm font-mono text-muted hover:text-link transition-colors"
        >
          ← Writing
        </Link>
        <h1 className="font-mono text-2xl sm:text-3xl font-semibold leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted font-mono">
          <span>{post.date}</span>
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded border"
              style={{ borderColor: 'var(--border)' }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <MarkdownRenderer html={post.contentHtml} />
    </article>
  );
}
