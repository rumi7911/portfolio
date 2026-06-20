import { Project } from '@/content/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-mono text-base font-semibold group-hover:text-link transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted font-mono">{project.year}</span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2 py-0.5 rounded border"
              style={{ borderColor: 'var(--border)' }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </a>
    </article>
  );
}
