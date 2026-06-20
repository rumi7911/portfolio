type ProofBlockProps = {
  label: string;
  title: string;
  description: string;
  href?: string;
};

export function ProofBlock({ label, title, description, href }: ProofBlockProps) {
  const content = (
    <div className="group h-full border-t border-border pt-5 transition-colors hover:border-accent">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>
      <h3 className="mt-3 font-mono text-base font-semibold transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  );
}
