import { CapabilityRow } from '@/components/CapabilityRow';
import { CTAButton } from '@/components/CTAButton';
import { PostList } from '@/components/PostList';
import { ProjectCard } from '@/components/ProjectCard';
import { ProofBlock } from '@/components/ProofBlock';
import { SocialLinks } from '@/components/SocialLinks';
import { bookConsultUrl, foundationPostUrl } from '@/content/links';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import headshot from '@/public/headshot.jpg';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-20">
      <section className="grid gap-12 border-b border-border pb-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
        <div className="max-w-3xl">
          <h1 className="font-mono text-3xl font-semibold leading-tight sm:text-4xl">
            I build secure AI operations systems for service businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            I’m Muhammad Sohaib Roomi, founder of{' '}
            <a
              href="https://www.cognumi.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Cognumi
            </a>
            . I design and deploy AI-managed workflows that help small teams
            automate scheduling, client follow-ups, reporting, research, and
            back-office work with security-minded execution.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href={bookConsultUrl}>
              Book AI consult
            </CTAButton>
            <CTAButton href="/projects" variant="secondary">
              View work
            </CTAButton>
            <a
              href="https://www.cognumi.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-muted transition-colors hover:text-link sm:px-2"
            >
              Discuss Cognumi
            </a>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
            Backed by AI workflow delivery through{' '}
            <a
              href="https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              agentalent.ai
            </a>
            , cybersecurity research, and shipped native Swift utilities.
          </p>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        <aside className="grid gap-6 sm:grid-cols-[190px_1fr] lg:grid-cols-1">
          <div
            className="relative mx-auto bg-white p-3 pb-6 shadow-soft transition-transform duration-300 hover:rotate-0 dark:bg-neutral-900 lg:rotate-1"
          >
            <div
              className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-1 bg-white/70 dark:bg-neutral-200/30"
              style={{
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            />
            <Image
              src={headshot}
              alt="Muhammad Sohaib Roomi"
              width={220}
              height={293}
              className="block aspect-[3/4] w-[220px] object-cover"
              priority
            />
            <p className="mt-4 text-center font-serif text-sm italic text-muted">
              London, 2021
            </p>
          </div>
          <div className="border border-border bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Profile
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-mono text-base font-semibold">Founder</p>
                <p className="mt-1 text-sm text-muted">Cognumi</p>
              </div>
              <div>
                <p className="font-mono text-base font-semibold">Builder</p>
                <p className="mt-1 text-sm text-muted">
                  Agentic workflows and Swift macOS tools
                </p>
              </div>
              <div>
                <p className="font-mono text-base font-semibold">Security</p>
                <p className="mt-1 text-sm text-muted">
                  Vulnerability scanner research and certifications
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-4">
          <ProofBlock
            label="Company"
            title="Cognumi"
            description="AI-managed operations for service businesses that need calmer, more automated back-office work."
            href="https://www.cognumi.co.uk/"
          />
          <ProofBlock
            label="Delivery"
            title="agentalent.ai"
            description="Custom agentic workflows for research, outreach, reporting, and operational automation."
            href="https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9"
          />
          <ProofBlock
            label="Foundation"
            title="Cybersecurity"
            description="Research background in vulnerability scanning, network defense, and security essentials."
            href={foundationPostUrl}
          />
          <ProofBlock
            label="Shipping"
            title="Swift tools"
            description="Native macOS utilities including ClipSpot, Lockey, and Bekon."
            href="https://github.com/rumi7911"
          />
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-muted">
              Featured work
            </p>
            <h2 className="mt-3 font-mono text-2xl font-semibold leading-tight">
              Practical systems, not experiments.
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden font-mono text-sm text-muted transition-colors hover:text-accent sm:block"
          >
            View all
          </Link>
        </div>
        <div>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-muted">
            How I help
          </p>
          <h2 className="mt-3 font-mono text-2xl font-semibold leading-tight">
            AI automation with operational judgment.
          </h2>
        </div>
        <div className="mt-8">
          <CapabilityRow
            title="AI operations design"
            description="Map the repetitive work inside a service business, identify where AI can safely take over, and turn that into a clear operating system."
            detail="Discovery, workflows, SOPs"
          />
          <CapabilityRow
            title="Agentic workflow builds"
            description="Build and deploy agents for research, lead qualification, CRM updates, client follow-ups, reporting, and internal coordination."
            detail="LLMs, tools, integrations"
          />
          <CapabilityRow
            title="Secure automation"
            description="Bring a cybersecurity lens to automation: data boundaries, failure modes, access control, auditability, and human review where it matters."
            detail="Security-minded delivery"
          />
          <CapabilityRow
            title="Local-first tooling"
            description="Ship focused native utilities that respect speed, privacy, and daily workflows, especially for macOS teams."
            detail="Swift, macOS, productivity"
          />
        </div>
      </section>

      <section className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-muted">
            Recent writing
          </p>
          <h2 className="mt-3 font-mono text-2xl font-semibold leading-tight">
            Notes on AI, security, and operations.
          </h2>
          <Link
            href="/blog"
            className="mt-5 inline-flex font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Read all
          </Link>
        </div>
        <PostList posts={posts} />
      </section>

      <section className="border border-border bg-surface p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              Work together
            </p>
            <h2 className="mt-3 font-mono text-2xl font-semibold leading-tight">
              Need an AI workflow that actually survives operations?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              I can help define the workflow, build the agentic system, and
              make sure it fits the way your team already works.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={bookConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-max items-center justify-center rounded border border-accent bg-accent px-5 text-center font-mono text-xs font-semibold uppercase leading-none tracking-wider text-white transition-transform hover:-translate-y-0.5"
            >
              <span className="whitespace-nowrap">
              Book AI consult
              </span>
            </a>
            <a
              href="https://www.cognumi.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-max items-center justify-center rounded border border-border px-5 text-center font-mono text-xs font-semibold uppercase leading-none tracking-wider transition-colors hover:border-accent hover:text-accent"
            >
              <span className="whitespace-nowrap">
              Discuss Cognumi
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
