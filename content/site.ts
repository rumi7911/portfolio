export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://rumi7911.github.io/portfolio'
).replace(/\/$/, '');

export const siteName = 'Muhammad Sohaib Roomi';

export const siteDescription =
  'Secure AI operations systems, Cyber Essentials readiness tools, agentic workflows, and automation consulting for service businesses.';

export const author = {
  name: 'Muhammad Sohaib Roomi',
  email: 'sohaib.7911@gmail.com',
  jobTitle: 'Founder of Cognumi and BrightCert',
  sameAs: [
    'https://github.com/rumi7911',
    'https://www.linkedin.com/in/muhammad-sohaib-roomi/',
    'https://x.com/Sohaibroomiii',
    'https://www.cognumi.co.uk/',
    'https://brightcert.co.uk/',
    'https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9',
  ],
};

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalPath =
    normalizedPath === '/' ||
    normalizedPath.endsWith('/') ||
    /\.[a-z0-9]+$/i.test(normalizedPath)
      ? normalizedPath
      : `${normalizedPath}/`;

  return `${siteUrl}${canonicalPath}`;
}
