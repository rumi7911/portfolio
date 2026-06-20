import { BlogContent } from '@/components/BlogContent';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Writing — Muhammad Sohaib Roomi',
  description: 'Essays on AI operations, agentic workflows, and startups.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
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
