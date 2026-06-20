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

## Tools in the stack

- **Orchestration:** n8n, Inngest, or custom Node/Python workers.
- **LLM:** OpenAI GPT-4o / Claude 3.5 Sonnet depending on reasoning needs.
- **Memory:** Pinecone or pgvector for long-term context.
- **Integration:** Direct APIs + OAuth where possible.
- **Observability:** Langfuse or simple structured logs.

## What still breaks

LLMs are bad at exact arithmetic, strict Boolean logic, and anything requiring privileged access. The best workflows keep the model in its lane: language understanding, summarization, classification, and drafting. The rest is deterministic code.

If you're considering an agentic workflow for your business, start with one repeatable task that has a clear success condition. Don't automate the edges first.
