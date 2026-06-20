export interface Project {
  title: string;
  description: string;
  href: string;
  year: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Cognumi',
    description:
      'AI-managed operations for service businesses. I’m building the platform that lets small teams automate scheduling, client follow-ups, reporting, and back-office workflows without hiring more ops people.',
    href: 'https://www.cognumi.co.uk/',
    year: '2024–Present',
    tags: ['AI', 'Operations', 'Founder', 'SaaS'],
    featured: true,
  },
  {
    title: 'agentalent.ai — Custom Agentic Workflows',
    description:
      'A consulting and productized-service arm where I design, build, and deploy custom AI agents for businesses. From autonomous research agents to CRM-integrated outreach workflows.',
    href: 'https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9',
    year: '2024–Present',
    tags: ['Agentic AI', 'Automation', 'LLMs', 'Consulting'],
    featured: true,
  },
  {
    title: 'ClipSpot',
    description:
      'A native macOS clipboard manager that lives in the menu bar. Stores text, images, videos, and file references in a fast, searchable, local-first archive.',
    href: 'https://github.com/rumi7911/ClipSpot',
    year: '2024',
    tags: ['Swift', 'macOS', 'Native', 'Open Source'],
  },
  {
    title: 'Nessus vs OpenVAS Vulnerability Scanner Study',
    description:
      'Master’s thesis research comparing proprietary and open-source vulnerability scanners on standard and intentionally vulnerable Ubuntu web server installations.',
    href: '#',
    year: '2022–2023',
    tags: ['Cybersecurity', 'Research', 'Linux', 'Vulnerability Scanning'],
  },
];
