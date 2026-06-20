import { CTAButton } from '@/components/CTAButton';
import { JsonLd } from '@/components/JsonLd';
import { SocialLinks } from '@/components/SocialLinks';
import { bookConsultUrl } from '@/content/links';
import { absoluteUrl, author } from '@/content/site';

export const metadata = {
  title: 'About',
  description:
    'Founder of Cognumi building secure AI operations systems, agentic workflows, and automation for service businesses.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Muhammad Sohaib Roomi',
    description:
      'Founder of Cognumi building secure AI operations systems, agentic workflows, and automation for service businesses.',
    url: absoluteUrl('/about'),
  },
};

const certifications = [
  'Digital Forensics Essentials (DFE) — EC-Council',
  'Ethical Hacking Essentials (EHE) — EC-Council',
  'Network Defense Essentials (NDE) — EC-Council',
  'Fortinet Certified Fundamentals: Cybersecurity',
  'HCIP (Routing & Switching) — Huawei',
];

export default function About() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Muhammad Sohaib Roomi',
    url: absoluteUrl('/about'),
    mainEntity: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.jobTitle,
      sameAs: author.sameAs,
    },
  };

  return (
    <div className="space-y-16">
      <JsonLd data={aboutJsonLd} />
      <section className="max-w-3xl">
        <p className="font-mono text-sm font-semibold uppercase tracking-wider text-muted">
          About
        </p>
        <h1 className="mt-4 font-mono text-3xl font-semibold leading-tight sm:text-4xl">
          I build AI workflows with an operator’s eye and a security baseline.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          I’m Muhammad Sohaib Roomi, founder of{' '}
          <a
            href="https://www.cognumi.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Cognumi
          </a>
          , an AI-managed operations company for service businesses. My work
          sits where practical automation, agentic workflows, and secure
          implementation meet.
        </p>
      </section>

      <section className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="font-mono text-2xl font-semibold">
          What I focus on
        </h2>
        <div className="space-y-5 text-sm leading-7 text-muted">
          <p>
            Through{' '}
            <a
              href="https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              agentalent.ai
            </a>
            , I design and deploy custom agentic AI workflows for teams that
            want to automate research, outreach, reporting, and back-office
            coordination without creating fragile internal tools.
          </p>
          <p>
            Before AI operations, I worked in cybersecurity research. My
            master’s thesis compared Nessus and OpenVAS vulnerability scanners
            on Ubuntu web servers, which shaped how I think about reliability,
            auditability, and failure modes in automation.
          </p>
          <p>
            I also ship focused native macOS utilities in Swift, including
            ClipSpot, Lockey, and Bekon. Those projects reflect the same bias:
            small tools, clear workflows, and software that respects daily
            operations.
          </p>
        </div>
      </section>

      <section className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="font-mono text-2xl font-semibold">
          Certifications
        </h2>
        <ul className="grid gap-3 text-sm text-muted sm:grid-cols-2">
          {certifications.map((certification) => (
            <li
              key={certification}
              className="border border-border bg-surface p-4"
            >
              {certification}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-8 border border-border bg-surface p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="font-mono text-2xl font-semibold">
            Building an AI operations workflow?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            I can help define the workflow, choose the automation boundary, and
            ship the first useful system.
          </p>
        </div>
        <CTAButton href={bookConsultUrl}>
          Book AI consult
        </CTAButton>
      </section>

      <section>
        <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-muted">
          Connect
        </h2>
        <SocialLinks />
      </section>
    </div>
  );
}
