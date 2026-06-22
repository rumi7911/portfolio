import { JsonLd } from '@/components/JsonLd';
import { ProjectCard } from '@/components/ProjectCard';
import { absoluteUrl } from '@/content/site';
import { projects } from '@/content/projects';

export const metadata = {
  title: 'Work',
  description:
    'Cognumi, agentalent.ai, Relevance AI marketplace agents, Building Mobile Apps with Claude Code, ClipSpot, Lockey, Bekon, and cybersecurity research by Muhammad Sohaib Roomi.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Work — Muhammad Sohaib Roomi',
    description:
      'Cognumi, agentalent.ai, Relevance AI marketplace agents, Building Mobile Apps with Claude Code, ClipSpot, Lockey, Bekon, and cybersecurity research by Muhammad Sohaib Roomi.',
    url: absoluteUrl('/projects'),
  },
};

export default function Projects() {
  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Work by Muhammad Sohaib Roomi',
    url: absoluteUrl('/projects'),
    hasPart: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: project.href,
      keywords: project.tags.join(', '),
    })),
  };

  return (
    <div className="space-y-12">
      <JsonLd data={projectsJsonLd} />
      <div className="max-w-3xl">
        <p className="font-mono text-sm font-semibold uppercase tracking-wider text-muted">
          Work
        </p>
        <h1 className="mt-4 font-mono text-3xl font-semibold leading-tight sm:text-4xl">
          Systems I am building, shipping, and researching.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          A clients-first view of my current startups, custom AI workflow work,
          marketplace agents, published AI development guide, native macOS
          utilities, and earlier cybersecurity research.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
