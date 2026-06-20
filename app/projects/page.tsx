import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/content/projects';

export const metadata = {
  title: 'Projects — Muhammad Sohaib Roomi',
  description:
    'Cognumi, agentalent.ai, ClipSpot, and cybersecurity research projects.',
};

export default function Projects() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="font-mono text-3xl font-semibold">Projects</h1>
        <p className="text-muted leading-relaxed max-w-2xl">
          A mix of current startups, AI workflow work, open-source tools, and
          earlier research. Everything here is either shipping or shipped.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
