import { SocialLinks } from '@/components/SocialLinks';
import { ProjectCard } from '@/components/ProjectCard';
import { PostList } from '@/components/PostList';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-10 items-start">
        <div>
          <h1 className="font-mono text-3xl sm:text-4xl font-semibold leading-tight">
            Hey, I’m Sohaib. I build AI operations at Cognumi and design agentic
            workflows.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted max-w-2xl">
            I’m the founder of Cognumi, where we’re building AI-managed operations
            for service businesses. I also help companies deploy custom agentic AI
            workflows through agentalent.ai. Previously, I worked in cybersecurity
            research and shipped a few native macOS apps.
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="md:pt-2 mx-auto md:mx-0">
          <div
            className="relative p-3 pb-8 bg-white dark:bg-neutral-900 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.25)',
            }}
          >
            <img
              src="/headshot.jpg"
              alt="Muhammad Sohaib Roomi"
              width={156}
              height={208}
              className="block w-[156px] h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-muted">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-mono hover:text-accent transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-muted">
            Recent Writing
          </h2>
          <Link
            href="/blog"
            className="text-sm font-mono hover:text-accent transition-colors"
          >
            Read all →
          </Link>
        </div>
        <PostList posts={posts} />
      </section>
    </div>
  );
}
