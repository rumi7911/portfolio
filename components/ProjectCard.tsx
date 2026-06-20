import { Project } from '@/content/projects';

export function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith('http');

  return (
    <article className="group border-t border-border py-7">
      <a
        href={project.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-10"
      >
        <div>
          <div className="flex items-baseline justify-between gap-4 md:block">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.role}
            </p>
            <span className="font-mono text-xs text-muted md:mt-3 md:block">
              {project.year}
            </span>
          </div>
          <p className="mt-3 hidden text-sm leading-6 text-muted md:block">
            {project.outcome}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-base font-semibold transition-colors group-hover:text-link">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border px-2 py-0.5 font-mono text-[11px] uppercase text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
