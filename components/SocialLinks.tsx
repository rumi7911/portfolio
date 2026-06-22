import {
  hashnodeUrl,
  mobileAppsBookAmazonUrl,
  mobileAppsBookGumroadUrl,
  mobileAppsBookMediumUrl,
} from '@/content/links';

const links = [
  {
    label: 'Twitter',
    href: 'https://x.com/Sohaibroomiii',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-sohaib-roomi/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rumi7911',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:sohaib.7911@gmail.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: mobileAppsBookMediumUrl,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M13.54 12a6.77 6.77 0 0 1-6.77 6.77A6.77 6.77 0 0 1 0 12a6.77 6.77 0 0 1 6.77-6.77A6.77 6.77 0 0 1 13.54 12Zm7.43 0c0 3.51-1.52 6.36-3.39 6.36s-3.39-2.85-3.39-6.36 1.52-6.36 3.39-6.36 3.39 2.85 3.39 6.36ZM24 12c0 3.15-.53 5.7-1.19 5.7-.65 0-1.18-2.55-1.18-5.7s.53-5.7 1.18-5.7C23.47 6.3 24 8.85 24 12Z" />
      </svg>
    ),
  },
  {
    label: 'Gumroad',
    href: mobileAppsBookGumroadUrl,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M6 7.5h12" />
        <path d="M6 12h10" />
        <path d="M6 16.5h7" />
        <rect width="16" height="18" x="4" y="3" rx="2" />
      </svg>
    ),
  },
  {
    label: 'Kindle',
    href: mobileAppsBookAmazonUrl,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
        <path d="M8 6h8" />
        <path d="M8 10h6" />
      </svg>
    ),
  },
  {
    label: 'Hashnode',
    href: hashnodeUrl,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M7.22 1.66a4.82 4.82 0 0 1 6.82 0l8.3 8.3a2.89 2.89 0 0 1 0 4.08l-8.3 8.3a4.82 4.82 0 0 1-6.82 0l-5.56-5.56a4.82 4.82 0 0 1 0-6.82zm4.78 14.1a3.76 3.76 0 1 0 0-7.52 3.76 3.76 0 0 0 0 7.52z" />
      </svg>
    ),
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto') ? undefined : '_blank'}
          rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          className="group flex items-center gap-2 text-muted hover:text-ink dark:hover:text-paper transition-colors"
        >
          <span className="text-muted group-hover:text-ink dark:group-hover:text-paper transition-colors">
            {link.icon}
          </span>
          <span className="font-mono text-xs tracking-wider uppercase">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
