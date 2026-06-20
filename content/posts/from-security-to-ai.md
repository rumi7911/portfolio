---
title: From Cybersecurity Research to AI Operations
date: '2024-11-08'
excerpt: My background in vulnerability scanning and network defense turned out to be surprisingly useful for building reliable AI systems.
tags: ['Career', 'AI', 'Cybersecurity']
---

My path into AI operations wasn't a straight line.

I spent years in cybersecurity: EC-Council certifications, a master's thesis comparing Nessus and OpenVAS, network defense work, and Huawei routing/switching training. That world teaches you to think in threats, trust boundaries, and logs.

Those same instincts matter when you're building AI agents.

## Security mindset applied to agents

- **Trust but verify.** An LLM output should be validated before it triggers an action.
- **Least privilege.** Agents should only have the API scopes they need.
- **Audit everything.** If you can't explain why an agent did something, you can't debug it.
- **Fail safe.** A failed automation should never make things worse than no automation.

These principles sound obvious in security, but they are still missing from many AI workflows. A model is often given broad context, broad tools, and vague instructions, then expected to behave correctly because the prompt says so. That is not how reliable systems are built.

The security mindset starts with boundaries. What data can the agent read? What systems can it write to? Which actions need approval? What happens when the model is uncertain? Where does the audit trail live? Those questions matter more than the model leaderboard.

## What vulnerability scanning taught me

My master's research compared Nessus and OpenVAS across standard and intentionally vulnerable Ubuntu web server installations. The practical lesson was not simply which scanner found more issues. It was that tools produce different results depending on configuration, environment, assumptions, and interpretation.

That maps directly to AI operations. Two agents can receive similar instructions and produce very different outcomes if their context, tools, permissions, and evaluation criteria differ. The system around the model determines the quality of the result.

Security tooling also teaches humility. A scanner finding something does not automatically mean the business understands the risk. An AI agent producing something does not automatically mean the business should act on it. There needs to be review, prioritization, and operational judgment.

## The overlap between security and operations

Security and operations both care about repeatability. They both rely on logs. They both punish vague ownership. They both fail when exceptions are invisible.

That is why I think secure AI operations is a useful frame. A good automation system should make the work faster, but it should also make the work easier to inspect. If an agent follows up with a lead, updates a CRM, or drafts a client report, the team should be able to see the input, the reasoning boundary, the action, and the final state.

## How this affects Cognumi

Cognumi is not just an attempt to make operations faster. It is an attempt to make AI-managed operations trustworthy enough for real businesses.

That means starting with bounded workflows, explicit permissions, and human approval where the cost of a mistake is high. It means treating logs and explanations as product features, not internal debugging leftovers. It also means designing around the tools a team already uses, because the safest workflow is usually the one that fits the existing operating model instead of forcing everyone into a new one.

This is why I believe the next generation of useful AI products will be built by people who understand systems, not just prompts.

Cognumi is my attempt to put that belief into practice.
