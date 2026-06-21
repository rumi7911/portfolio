import {
  mobileAppsBookAmazonUrl,
  mobileAppsBookDevToUrl,
  mobileAppsBookGumroadUrl,
  mobileAppsBookLeanpubUrl,
  mobileAppsBookMediumUrl,
} from '@/content/links';

export interface Project {
  title: string;
  description: string;
  href: string;
  year: string;
  tags: string[];
  role: string;
  outcome: string;
  featured?: boolean;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export const projects: Project[] = [
  {
    title: 'Cognumi',
    description:
      'AI-managed operations for service businesses. The platform focuses on automating scheduling, client follow-ups, reporting, and back-office workflows without adding headcount.',
    href: 'https://www.cognumi.co.uk/',
    year: '2024–Present',
    role: 'Founder',
    outcome: 'AI operations platform for service teams',
    tags: ['AI', 'Operations', 'Founder', 'SaaS'],
    featured: true,
  },
  {
    title: 'agentalent.ai — Custom Agentic Workflows',
    description:
      'Custom AI agents and workflow deployments for teams that need reliable automation across research, outreach, reporting, and internal operations.',
    href: 'https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9',
    year: '2024–Present',
    role: 'Builder',
    outcome: 'Client-facing agentic automation work',
    tags: ['Agentic AI', 'Automation', 'LLMs', 'Consulting'],
    featured: true,
  },
  {
    title: 'ClipSpot',
    description:
      'A native macOS clipboard manager that lives in the menu bar. Stores text, images, videos, and file references in a fast, searchable, local-first archive.',
    href: 'https://github.com/rumi7911/ClipSpot',
    year: '2026',
    role: 'Creator',
    outcome: 'Local-first Swift productivity app',
    tags: ['Swift', 'macOS', 'Native', 'Open Source'],
    featured: true,
  },
  {
    title: 'Building Mobile Apps with Claude Code in 2026',
    description:
      'A practical book for non-technical founders and vibe-coders who want to build and ship real mobile apps with Claude Code, Expo, React Native, Supabase, Anthropic Vision API, and EAS.',
    href: mobileAppsBookGumroadUrl,
    year: '2026',
    role: 'Author',
    outcome: '186-page guide from zero to App Store',
    tags: ['Book', 'Claude Code', 'React Native', 'Expo', 'AI Coding'],
    featured: true,
    links: [
      { label: 'Gumroad', href: mobileAppsBookGumroadUrl },
      { label: 'Amazon', href: mobileAppsBookAmazonUrl },
      { label: 'Leanpub', href: mobileAppsBookLeanpubUrl },
      { label: 'Medium', href: mobileAppsBookMediumUrl },
      { label: 'Dev.to', href: mobileAppsBookDevToUrl },
    ],
  },
  {
    title: 'Lockey',
    description:
      'A lightweight macOS menu-bar utility that temporarily locks keyboard input so a keyboard can be cleaned without accidental key presses.',
    href: 'https://github.com/rumi7911/Lockey',
    year: '2026',
    role: 'Creator',
    outcome: 'Practical macOS accessibility utility',
    tags: ['Swift', 'macOS', 'Menu Bar', 'Utility'],
  },
  {
    title: 'Bekon',
    description:
      'A lightweight macOS menu-bar utility that helps people find their cursor instantly, built around a small accessibility-focused workflow.',
    href: 'https://github.com/rumi7911/Bekon',
    year: '2026',
    role: 'Creator',
    outcome: 'Cursor-finding utility for macOS',
    tags: ['Swift', 'Accessibility', 'macOS', 'Menu Bar'],
  },
  {
    title: 'Nessus vs OpenVAS Vulnerability Scanner Study',
    description:
      'Master’s thesis research comparing proprietary and open-source vulnerability scanners on standard and intentionally vulnerable Ubuntu web server installations.',
    href: '#',
    year: '2022–2023',
    role: 'Researcher',
    outcome: 'Security research on scanner reliability',
    tags: ['Cybersecurity', 'Research', 'Linux', 'Vulnerability Scanning'],
  },
];
