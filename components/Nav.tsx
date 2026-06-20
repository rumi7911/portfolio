import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  return (
    <header className="mb-16 flex items-center justify-between text-sm">
      <Link
        href="/"
        className="font-mono font-semibold tracking-tight hover:text-accent transition-colors"
      >
        Muhammad Sohaib Roomi
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/blog" className="hover:text-accent transition-colors">
          Writing
        </Link>
        <Link href="/about" className="hover:text-accent transition-colors">
          About
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
