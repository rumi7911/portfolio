import Link from 'next/link';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
};

const variantClasses = {
  primary:
    'border-accent bg-accent text-white hover:-translate-y-0.5 hover:shadow-soft',
  secondary:
    'border-border bg-transparent text-ink hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:text-paper',
  ghost:
    'border-transparent text-muted hover:text-accent',
};

export function CTAButton({
  href,
  children,
  variant = 'primary',
  external,
}: CTAButtonProps) {
  const className = `inline-flex min-h-11 items-center justify-center rounded border px-5 text-center font-mono text-xs font-semibold uppercase leading-none tracking-wider transition-all duration-200 ${variantClasses[variant]}`;
  const isExternal = external ?? href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span className="whitespace-nowrap">{children}</span>
      </a>
    );
  }

  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={className}>
        <span className="whitespace-nowrap">{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="whitespace-nowrap">{children}</span>
    </Link>
  );
}
