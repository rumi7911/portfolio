---
title: How I Built a Portfolio of AI Compliance Agents for the UK Cybersecurity Market
date: '2026-06-26'
excerpt: 'I built four specialist AI agents for UK cybersecurity workflows: pentest reporting, Cyber Essentials readiness, GDPR breach assessment, and security awareness training.'
tags: ['AI Agents', 'Cybersecurity', 'UK GDPR', 'Cyber Essentials', 'Compliance']
---

The UK cybersecurity market has a very specific set of recurring operational problems.

Companies bidding for government work need Cyber Essentials. Organisations handling a breach need to decide quickly whether the ICO must be notified. Security teams need awareness training that staff will actually understand. Penetration testers still lose valuable time turning raw findings into polished reports.

These are not vague AI opportunities. They are repeatable, high-pressure workflows with defined outputs, clear buyers, and real compliance consequences.

That is why I built a small portfolio of specialist AI agents for UK cybersecurity and compliance work.

## The agent portfolio

The portfolio covers four workflows:

- **Pentest Report Consultant** - turns raw security findings into a structured report with CVSS scoring, OWASP and CWE mapping, remediation guidance, and executive-ready language.
- **Cyber Essentials Pre-Assessment Advisor** - checks readiness across the five Cyber Essentials control areas and produces a plain-English gap analysis.
- **GDPR Breach Impact Assessor** - helps teams assess UK GDPR Article 33 and Article 34 notification duties, including the 72-hour ICO deadline.
- **Security Awareness Training Generator** - creates monthly phishing simulations, debriefs, awareness bulletins, training scenarios, and manager summaries.

Each agent was designed around a painful job that already exists inside UK businesses. The point was not to create a general cybersecurity chatbot. The point was to build agents that know the workflow, the output format, and the risk behind the task.

## Why UK-specific matters

A lot of AI compliance tooling is built around broad enterprise categories. That can be useful, but it often misses local detail.

Cyber Essentials is a UK scheme. The ICO has its own breach-reporting process. UK SMEs think about HMRC, Companies House, Royal Mail, NHS, Land Registry, and local professional bodies, not just generic global examples.

Those details matter because they change the quality of the output. A Cyber Essentials readiness agent should understand the current IASME question set. A breach assessor should distinguish between notifying the ICO and notifying affected individuals. A training generator should produce examples that feel like the threats UK staff actually see.

## Cyber Essentials taught me the value of precise questions

The Cyber Essentials agent was the clearest example of why prompt design is not enough on its own.

Before finalising it, I reviewed the IASME question sets and found gaps in my original question design. Three details stood out:

1. Password requirements need to match the accepted Cyber Essentials methods, not a generic "strong password" question.
2. Multi-factor authentication has to cover all users on all cloud services, not just administrators.
3. Unsupported operating systems can become a direct failure point when security updates are no longer available.

After adding those checks, I tested the agent with a dummy company designed to trigger the gaps. The updated version correctly produced a not-ready verdict and explained the remediation work in practical language.

That is the kind of detail that separates a useful compliance agent from a confident but shallow one.

## The GDPR agent needed stricter consistency

For the GDPR breach assessor, consistency mattered more than creativity.

If the same breach description produces different notification advice on two runs, the agent is not useful. So I designed it with a lower temperature, a strict output structure, and explicit legal distinctions:

- Article 33 is about whether the ICO must be notified.
- Article 34 is about whether affected individuals must be notified.
- All breaches still need internal documentation, even when notification is not required.
- Special category data should raise the risk analysis.

In one test case, a recruitment firm accidentally sent passport copies and a biometric residence permit to the wrong recipient. The agent correctly treated the scenario as high risk, identified the likely need to notify both the ICO and affected individuals, and calculated the remaining deadline from the discovery time.

That is the kind of operational support SMEs need during a stressful event.

## Pentest reporting is a writing bottleneck

The pentest agent solves a different problem: not legal urgency, but reporting drag.

Many testers can find and validate issues faster than they can turn those findings into a polished client report. The agent takes rough findings and produces a structured report with:

- executive summary
- scope and methodology
- risk-rated findings
- CVSS v3.1 scoring
- OWASP and CWE mapping
- remediation roadmap
- compliance mapping
- appendices and glossary

The important implementation lesson was restraint. I initially tested external tools, but they introduced low-quality behaviour like invented document links. Removing tools and forcing clean Markdown output made the agent more reliable.

For this workflow, the agent does not need to browse the web. It needs to organise evidence, apply a consistent reporting structure, and produce language a client can act on.

## Awareness training benefits from variety

The security awareness training agent is the most creative of the four.

A good phishing simulation should not read like a template everyone has seen before. An MSP running training for multiple clients needs variation by sector, season, difficulty, and staff role.

So this agent uses a slightly more creative configuration and produces a complete monthly pack:

- phishing simulation email
- click-through debrief page
- staff awareness bulletin
- workplace training scenario
- manager briefing

The UK-specific angle matters here too. HMRC, Royal Mail, Companies House, NHS, and similar references are more realistic for UK staff than generic global examples.

## What the verification scores told me

The agents went through AgentTalent.ai's Sensei Handshake verification process. The results gave me a useful external signal:

- Pentest Report Consultant: **93/100 Gold**
- Cyber Essentials Pre-Assessment Advisor: **92/100 Gold** after iteration
- GDPR Breach Impact Assessor: **90/100 Gold**
- Security Awareness Training Generator: **89/100 Silver** on first attempt

The scores are not the finish line. They are a baseline. They show the agents can handle structured tasks, safety checks, unclear prompts, and quality expectations well enough to keep improving.

## What I learned

The main lesson is that useful AI agents need domain boundaries.

The best results came from agents with a narrow job, a specific buyer, a clear output format, and explicit rules for what to do when the input is messy. That is especially important in cybersecurity and compliance, where a vague answer can create real risk.

This work also reinforced my broader view of AI operations: the opportunity is not to build agents that sound impressive in isolation. The opportunity is to build agents that remove repeatable work from real businesses while keeping humans in control of important decisions.

That is the direction I am continuing to build with Cognumi.
