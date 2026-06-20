---
title: Why I Still Build Small macOS Utilities
date: '2026-06-19'
excerpt: What building ClipSpot, Lockey, and Bekon taught me about product taste, local-first software, and useful automation.
tags: ['macOS', 'Swift', 'Productivity']
---

I like small software.

Not because small products are easy, but because they force clarity. A good menu-bar utility has almost nowhere to hide. It either solves the problem quickly or it gets removed.

That is why I keep building small macOS utilities alongside my AI operations work. Projects like [ClipSpot](https://github.com/rumi7911/ClipSpot), [Lockey](https://github.com/rumi7911/Lockey), and [Bekon](https://github.com/rumi7911/Bekon) are not separate from how I think about automation. They are practice in building tools that respect the user's actual workflow.

## Small tools need a sharp job

A small utility should have one clear promise.

ClipSpot keeps clipboard history searchable and local-first. Lockey temporarily locks keyboard input so you can clean your keyboard without accidental key presses. Bekon helps you find your cursor instantly.

None of these products needs a complex onboarding flow. The job is obvious. The value is immediate. The product either reduces friction or it does not.

That same discipline applies to AI workflows. The most useful agent is not the one with the longest feature list. It is the one that removes a specific operational pain reliably.

## Native software teaches respect for context

macOS users already have habits. They use keyboard shortcuts, menu-bar tools, Spotlight, Finder, clipboard managers, and window workflows. A utility that ignores those habits feels heavy.

Building native software in Swift makes me think carefully about:

- launch speed
- keyboard access
- menu-bar behavior
- local storage
- privacy expectations
- visual restraint
- failure states

Those details matter because productivity software lives close to daily work. If it interrupts more than it helps, it loses.

## Local-first still matters

Not every useful product needs a cloud backend.

For tools like clipboard history or small accessibility utilities, local-first design can be a feature. It keeps the product fast, private, and simple. It also reduces operational complexity because the tool does not need accounts, sync logic, or server infrastructure before it can be useful.

That does not mean every product should be local-only. It means the architecture should match the job. If the job is personal and device-level, local-first is often the right default. If the job is collaborative and operational, cloud systems and integrations may be necessary.

The important thing is to choose intentionally.

## Small utilities improve product taste

Building small utilities is a good way to train product taste because every decision is visible.

If a button label is unclear, the product feels worse. If a shortcut is awkward, the workflow slows down. If the app asks for permissions too early, trust drops. If the menu-bar item is noisy, the tool feels intrusive.

Small products create a tight feedback loop. You can feel whether the workflow is good.

That is useful when designing AI systems too. An AI workflow is still a product. It needs good defaults, clear controls, predictable outputs, and respectful failure states.

## What this has to do with AI operations

AI operations can become abstract very quickly. Agents, tools, memory, orchestration, retrieval, evaluations. Those are all important, but the user still experiences the workflow as a simple question:

> Did this make my work easier today?

Small macOS utilities keep me close to that question. They remind me that software should earn its place in someone's routine.

The best AI workflow should feel the same. It should not require the user to admire the architecture. It should quietly remove a task, reduce a handoff, prepare a draft, catch a missed follow-up, or make the next action obvious.

## The kind of software I want to build

I want to build software that is practical, calm, and trustworthy.

Sometimes that means an AI-managed operations system like [Cognumi](https://www.cognumi.co.uk/). Sometimes it means a small Swift utility that solves one annoying problem well. Both require the same instincts: understand the workflow, reduce friction, and do not add complexity just to look impressive.

Small tools are not small because they are unambitious. They are small because the best version of the idea does not need to be bigger.
