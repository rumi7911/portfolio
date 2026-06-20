'use client';

import { useState, useMemo } from 'react';
import { Post } from '@/lib/posts';
import Link from 'next/link';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const year = date.getFullYear();
  return { month, year };
}

interface BlogContentProps {
  posts: Post[];
}

export function BlogContent({ posts }: BlogContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => post.tags?.forEach((tag) => tags.add(tag)));
    return ['All', ...Array.from(tags).sort()];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag || selectedTag === 'All') return posts;
    return posts.filter((post) => post.tags?.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === 'All' ? null : tag)}
            className={`font-mono text-xs tracking-wider uppercase px-3 py-1.5 border transition-colors ${
              (tag === 'All' && !selectedTag) || selectedTag === tag
                ? 'bg-ink text-paper dark:bg-paper dark:text-ink'
                : 'hover:border-link hover:text-link'
            }`}
            style={{ borderColor: 'var(--border)' }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[60px] top-0 bottom-0 w-px hidden sm:block"
          style={{ backgroundColor: 'var(--border)' }}
        />

        <div className="space-y-12">
          {filteredPosts.map((post) => {
            const { month, year } = formatDate(post.date);
            return (
              <article key={post.slug} className="relative sm:pl-24">
                {/* Timeline date and dot */}
                <div className="hidden sm:flex flex-col items-end absolute left-0 top-1 w-[50px] text-right">
                  <span className="font-mono text-xs text-muted">{month}</span>
                  <span className="font-mono text-xs text-muted">{year}</span>
                </div>
                <div
                  className="hidden sm:block absolute left-[56px] top-2.5 w-2 h-2 rounded-full border-2"
                  style={{
                    backgroundColor: 'var(--bg)',
                    borderColor: 'var(--muted)',
                  }}
                />

                <Link href={`/blog/${post.slug}`} className="group block">
                  <h3 className="font-mono text-xl font-semibold group-hover:text-link transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>

                  {/* Mobile date */}
                  <div className="sm:hidden mt-2 flex items-center gap-2 text-xs text-muted font-mono">
                    <span>{month}</span>
                    <span>{year}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2 py-0.5 border"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
