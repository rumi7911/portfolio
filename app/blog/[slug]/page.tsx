import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
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
    title: `${post.title} — Muhammad Sohaib Roomi`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/blog"
          className="text-sm font-mono text-muted hover:text-accent transition-colors"
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
              {tag}
            </span>
          ))}
        </div>
      </div>

      <MarkdownRenderer html={post.contentHtml} />
    </article>
  );
}
