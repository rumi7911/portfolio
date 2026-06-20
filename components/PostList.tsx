import { Post } from '@/lib/posts';
import Link from 'next/link';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-mono text-base font-semibold group-hover:text-link transition-colors">
                {post.title}
              </h3>
              <span className="shrink-0 text-xs text-muted font-mono">
                {post.date}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2 py-0.5 rounded border"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
