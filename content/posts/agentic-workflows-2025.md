---
title: The Agentic Workflow Stack I'm Using in 2025
date: '2025-05-20'
excerpt: A practical look at the tools, patterns, and prompts I use to build autonomous workflows for clients.
tags: ['AI', 'Automation', 'LLMs']
---

"Agentic" has become one of the most abused words in tech. This post is not about philosophy. It's about the stack I actually use to build workflows that save clients 10+ hours a week.

## The core pattern

Almost every useful workflow follows the same loop:

1. **Trigger** — a scheduled job, a webhook, or a changed row.
2. **Gather** — fetch context from APIs, documents, or databases.
3. **Decide** — use an LLM to classify, summarize, or route.
4. **Act** — send an email, update a record, create a task.
5. **Verify** — check the result and retry or escalate.

That loop matters because it keeps the agent from becoming a loose prompt with too much authority. The LLM is only one part of the system. The workflow around it decides whether the output becomes a draft, a task, a database update, or a human escalation.

When I design these systems, I try to write the workflow in plain English before choosing tools. If I cannot describe the trigger, context, decision, action, and verification step clearly, the build is not ready.

## Tools in the stack

- **Orchestration:** n8n, Inngest, or custom Node/Python workers.
- **LLM:** OpenAI GPT-4o / Claude 3.5 Sonnet depending on reasoning needs.
- **Memory:** Pinecone or pgvector for long-term context.
- **Integration:** Direct APIs + OAuth where possible.
- **Observability:** Langfuse or simple structured logs.

I do not treat this stack as fixed. The right choice depends on the client, the risk level, and the tools already in place.

For a fast internal prototype, n8n can be the best choice because the team can see the workflow and change it. For a production workflow with stricter reliability requirements, I prefer custom workers, queues, typed payloads, and explicit retry behavior. For memory, I only add vector search when the workflow genuinely needs retrieval across a larger body of context. A lot of useful automation works perfectly well with structured records and well-written prompts.

## How I structure prompts

The prompt is not where I hide business logic. The prompt should explain the task, the role of the model, the available context, and the expected output format.

The rules that must never be violated belong in code or workflow configuration. Examples:

- Do not send an email without approval.
- Do not update a CRM field unless the target record ID is known.
- Do not summarize private notes into a client-facing update unless those notes are marked shareable.
- Do not continue if required context is missing.

This separation makes workflows easier to debug. If the model produces a weak draft, improve the prompt or context. If the workflow performs an unsafe action, fix the guardrail outside the model.

## Verification is the product

The verification step is where most agent demos become real software.

For simple workflows, verification might mean checking that an API returned a success response and storing the action log. For more sensitive workflows, it might mean comparing the generated output against source data, running a classifier over the final message, or requiring a human to approve the action before it leaves the system.

I like workflows where a human can inspect the run history and immediately understand what happened. Every useful agent should leave a trail: input, context, decision, action, result, and fallback.

## What still breaks

LLMs are bad at exact arithmetic, strict Boolean logic, and anything requiring privileged access. The best workflows keep the model in its lane: language understanding, summarization, classification, and drafting. The rest is deterministic code.

If you're considering an agentic workflow for your business, start with one repeatable task that has a clear success condition. Don't automate the edges first.

The best first task is usually boring: a status report, a lead follow-up, a support triage step, a CRM cleanup pass. If that workflow works every day for a month, it creates more trust than a flashy demo that only works once.
