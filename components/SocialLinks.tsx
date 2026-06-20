import Link from 'next/link';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-sohaib-roomi/' },
  { label: 'X / Twitter', href: 'https://x.com/Sohaibroomiii' },
  { label: 'GitHub', href: 'https://github.com/rumi7911' },
  { label: 'Website', href: 'https://yourdomain.com', placeholder: true },
  { label: 'Email', href: 'mailto:sohaib.7911@gmail.com' },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto') ? undefined : '_blank'}
          rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          className={`font-mono hover:text-accent transition-colors ${
            link.placeholder ? 'opacity-70' : ''
          }`}
        >
          {link.label}
          {link.placeholder && ' *'}
        </a>
      ))}
    </div>
  );
}
