import { SocialLinks } from '@/components/SocialLinks';

export const metadata = {
  title: 'About — Muhammad Sohaib Roomi',
  description:
    'Founder of Cognumi. Background in AI operations, agentic workflows, cybersecurity, and native macOS development.',
};

export default function About() {
  return (
    <div className="space-y-10">
      <h1 className="font-mono text-3xl font-semibold">About</h1>

      <section className="space-y-4 text-muted leading-relaxed">
        <p>
          I’m Muhammad Sohaib Roomi, founder of{' '}
          <a
            href="https://www.cognumi.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Cognumi
          </a>
          , an AI-managed operations company for service businesses.
        </p>
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
          , I also design and deploy custom agentic AI workflows for teams that
          want to automate research, outreach, reporting, and back-office tasks.
        </p>
        <p>
          Before AI operations, I worked in cybersecurity research. My master’s
          thesis compared Nessus and OpenVAS vulnerability scanners on Ubuntu
          web servers, and I hold certifications from EC-Council, Fortinet, and
          Huawei.
        </p>
        <p>
          On the side, I shipped ClipSpot, a native macOS clipboard manager
          built in Swift.
        </p>
        <p>
          I write about AI operations, agentic workflows, and the intersection
          of security and autonomy. If you’re building something similar,
          consulting on AI automation, or interested in investing in Cognumi,
          I’d love to talk.
        </p>
      </section>

      <section>
        <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-muted mb-4">
          Certifications
        </h2>
        <ul className="space-y-2 text-sm text-muted">
          <li>Digital Forensics Essentials (DFE) — EC-Council</li>
          <li>Ethical Hacking Essentials (EHE) — EC-Council</li>
          <li>Network Defense Essentials (NDE) — EC-Council</li>
          <li>Fortinet Certified Fundamentals: Cybersecurity</li>
          <li>HCIP (Routing & Switching) — Huawei</li>
        </ul>
      </section>

      <section>
        <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-muted mb-4">
          Connect
        </h2>
        <SocialLinks />
      </section>
    </div>
  );
}
