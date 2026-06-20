import { SocialLinks } from '@/components/SocialLinks';
import { ProjectCard } from '@/components/ProjectCard';
import { PostList } from '@/components/PostList';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import headshot from '@/public/headshot.jpg';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12 items-start">
        <div>
          <h1 className="font-mono text-3xl sm:text-4xl font-semibold leading-tight">
            Hey, I’m Sohaib. I design & build AI workflows at Cognumi.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted max-w-2xl">
            I’m the founder of{' '}
            <a
              href="https://www.cognumi.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Cognumi
            </a>
            , where we’re building AI-managed operations for service businesses.
            I also help companies deploy custom agentic AI workflows through{' '}
            <a
              href="https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              agentalent.ai
            </a>
            . Previously, I worked in cybersecurity research and shipped native macOS productivity apps.
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="md:pt-2 mx-auto md:mx-0">
          <div
            className="relative p-3 pb-6 bg-white dark:bg-neutral-900 rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{
              boxShadow: '0 12px 40px -12px rgba(0,0,0,0.25)',
            }}
          >
            {/* Tape */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/70 dark:bg-neutral-200/30 rotate-1"
              style={{
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            />
            <Image
              src={headshot}
              alt="Muhammad Sohaib Roomi"
              width={176}
              height={235}
              className="block w-[176px] h-auto object-cover"
              priority
            />
            <p className="mt-4 text-center font-serif italic text-sm text-muted">
              London, 2021
            </p>
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
