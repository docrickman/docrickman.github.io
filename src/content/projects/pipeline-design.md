---
title: 'The triage pipeline I mostly didn''t build'
description: 'A design for automated error triage with a hard airlock between detection and production, and a schedule that refuses to build it early.'
pubDate: 'Jul 6 2026'
---

The tempting version of PZ server automation is the full pipeline: errors stream in, an AI
triages them, tickets appear with a hypothesis and a proposed fix, patches stage themselves. I
wrote the design doc for that system. Then the doc's main job became stopping anyone, including
me, from building it yet.

Two decisions in it are the ones I'd keep under oath.

**The airlock.** The design splits into two lanes. The unattended lane watches logs and
produces exactly one thing: a ticket. The interactive lane (a human working with AI tooling)
is the only thing allowed to touch files, and only on the test server. Verified fixes get
mirrored to production by hand. Nothing automated ever holds a write path to the world players
live in, so the blast radius of any automation failure is the size of a ticket.

**The phasing.** At design time the server had no players yet; mods were being vetted one at a
time. The problem an automated triage system solves is report volume outrunning human
attention, and that problem didn't exist. So the schedule says: run the vetting loop manually,
let the log watcher and the ticket templates earn their keep, and build the automation when the
load actually shows up. Complexity built ahead of need is just future maintenance with no
present benefit.

The doc also settled the licensing posture for redistributing mod fixes. Steam Workshop has no
structured permission field, so it's prose-scavenging with honest states, and UNKNOWN never
promotes to ALLOWED. Silence isn't consent. The preferred fix is one that never touches another
author's files at all: config, load order, or a patch mod of our own.

It also seeded six reusable skills for AI-assisted mod work: Kahlua conventions, Build 42 mod
structure, React-to-ISUI porting, server configuration, log triage, and ticket filing. Writing
tooling for the AI collaborator, not just with it.

Most of this pipeline still doesn't exist. That's the design working as intended. The design
docs are published in [pz-rppvp-ops](https://github.com/docrickman/pz-rppvp-ops), so you can
check my math.
