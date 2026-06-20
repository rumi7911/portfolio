type CapabilityRowProps = {
  title: string;
  description: string;
  detail: string;
};

export function CapabilityRow({
  title,
  description,
  detail,
}: CapabilityRowProps) {
  return (
    <article className="grid gap-3 border-t border-border py-6 md:grid-cols-[0.85fr_1.4fr_0.75fr] md:gap-8">
      <h3 className="font-mono text-base font-semibold">{title}</h3>
      <p className="text-sm leading-6 text-muted">{description}</p>
      <p className="font-mono text-xs uppercase leading-6 tracking-wider text-muted">
        {detail}
      </p>
    </article>
  );
}
