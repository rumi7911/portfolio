import Link from 'next/link';
import { bookConsultUrl } from '@/content/links';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  return (
    <header className="mb-16 flex flex-col items-start justify-between gap-5 text-sm sm:flex-row sm:items-center">
      <Link
        href="/"
        className="font-mono font-semibold tracking-tight transition-colors hover:text-accent"
      >
        Muhammad Sohaib Roomi
      </Link>
      <nav className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-start sm:gap-5">
        <Link href="/projects" className="transition-colors hover:text-accent">
          Work
        </Link>
        <Link href="/blog" className="transition-colors hover:text-accent">
          Writing
        </Link>
        <Link href="/about" className="transition-colors hover:text-accent">
          About
        </Link>
        <a
          href={bookConsultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-9 items-center justify-center rounded border border-border px-3 py-1.5 text-center font-mono text-xs uppercase leading-none tracking-wider transition-colors hover:border-accent hover:text-accent md:inline-flex"
        >
          <span className="whitespace-nowrap">Book consult</span>
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
