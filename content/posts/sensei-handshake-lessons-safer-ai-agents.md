---
title: What Sensei Handshake Taught Me About Building Safer AI Agents
date: '2026-06-25'
excerpt: After running multiple agents through AgentTalent.ai's Sensei Handshake, I found clear patterns in what makes agents safer, more consistent, and more useful under pressure.
tags: ['AI Agents', 'AgentTalent.ai', 'Sensei Handshake', 'AI Safety', 'Prompt Design']
---

I have been running my agents through AgentTalent.ai's Sensei Handshake evaluation.

It is useful because it does not only test whether an agent can produce a polished answer. It tests how the agent behaves when the task becomes uncomfortable: prompt injection, unsafe requests, hallucination traps, self-critique, unclear prompts, and persona consistency.

That is much closer to real production use than a perfect demo prompt.

After putting several agents through the process, a few patterns became obvious.

## Safety refusals need substance

Weak refusals sound like policy boilerplate.

Strong refusals explain the specific harm, name the relevant boundary, and offer a legitimate alternative.

For a cybersecurity agent, that means refusing a phishing or unauthorised access request in a way that connects to real-world impact. It is not enough to say "I cannot help with that." A stronger answer explains that the request could cause financial loss, credential theft, privacy harm, or unlawful access, then redirects to authorised testing, awareness training, or defensive review.

That matters because useful safety behaviour should still help the user reach a legitimate goal.

## Hallucination resistance is a product feature

One of the most important skills for an agent is knowing when it does not know something.

In the evaluation, agents did better when they refused to invent facts and pointed to specific sources the user could check. That is especially important in compliance workflows, where invented dates, thresholds, legal tests, or certification rules can create risk.

For my own agents, I now treat hallucination resistance as part of the product design:

- State the information boundary.
- Avoid fake links, fake citations, and fake file names.
- Give the user practical next steps.
- Keep the refusal tied to the agent's role.

This is less flashy than generating long answers, but it is far more useful.

## Prompt injection handling should be explicit

Prompt injection is not an abstract AI problem. It is an operational security problem.

The stronger agents recognised malicious or irrelevant instructions as attempts to override their task, extract hidden instructions, or force unsafe behaviour. In cybersecurity contexts, it helped to name the attack pattern and explain why it failed.

For example, a GDPR breach agent can treat an attempt to extract hidden system instructions as an unauthorised access attempt. A security awareness trainer can point out that manipulation and urgency are exactly the patterns it teaches staff to spot.

That keeps the refusal grounded in the agent's domain instead of sounding generic.

## Persona consistency improves reliability

Persona can be a gimmick when it is only tone. But for agents, a well-defined role can improve reliability.

A pentest reporting agent should think in terms of findings, evidence, severity, remediation, and client confidentiality. A GDPR breach agent should think in terms of risk to individuals, notification thresholds, deadline tracking, and documentation. A security awareness trainer should think in terms of staff behaviour and learning outcomes.

When the role is clear, the agent has a better chance of responding consistently across different tasks.

The goal is not theatrical personality. The goal is role discipline.

## Output structure prevents drift

The highest-value prompt change across my agents was simple: define the output structure explicitly.

When an agent has a fixed set of sections, it is less likely to wander. For compliance and reporting tasks, that matters because the user often needs to compare outputs across clients, incidents, or months.

For example:

- A pentest report needs findings, scoring, impact, evidence, and remediation.
- A Cyber Essentials assessment needs control-level status and a remediation roadmap.
- A GDPR breach assessment needs notification advice, deadline calculation, risk rating, and immediate actions.
- A training content pack needs simulation, debrief, bulletin, scenario, and manager summary.

Structure is not decoration. It is how the workflow becomes reviewable.

## Creativity needs the right boundary

Not every agent should be configured the same way.

For legal or compliance assessment, I want consistency. The GDPR breach agent should not produce a different conclusion because it felt creative that day.

For security awareness training, some variation is useful. A phishing simulation generator should adapt to sector, season, role, and difficulty level. If every client receives the same phrasing, the content gets stale.

The lesson is that model behaviour should match the job:

- lower variation for legal, compliance, and risk assessment
- moderate variation for training, awareness, and content generation
- strict structure for anything that needs review or auditability

## The agent should make human review easier

The best agents do not remove human judgment. They organise the work so a human can make a better decision faster.

That is the standard I am applying to my own agent builds. A useful agent should:

- do the repeatable parts of the task
- explain the reasoning
- show the assumptions
- make uncertainty visible
- produce output a human can review

In real businesses, trust is earned through repeatable execution. One impressive answer is not enough.

## My current prompt design principles

After this evaluation work, my system prompt checklist is much sharper:

1. Define the agent's role narrowly.
2. State the required output sections.
3. Name the boundaries and refusal rules.
4. Tell the agent what not to invent.
5. Include domain-specific escalation rules.
6. Match creativity level to the task.
7. Make the final output easy for a human to review.

These principles are shaping how I build the next generation of Cognumi agents.

The real test for AI agents is not whether they sound intelligent in a clean demo. It is whether they stay useful, bounded, and honest when the prompt gets messy.
