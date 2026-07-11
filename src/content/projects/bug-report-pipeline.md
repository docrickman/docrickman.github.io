---
title: 'A bug-report pipeline: Discord modal to triaged GitHub issue'
description: 'Players file /bugreport in Discord; Claude triages; the issue lands on a GitHub board with the server logs archived beside it.'
pubDate: 'Jul 10 2026'
---

Players are great at finding bugs and bad at reporting them. "Bandages crash the game" might
be a mod conflict, a load-order problem, or the engine. By the time anyone investigates, the
server log that would have settled it has rotated away, and the screenshot the player posted
is a dead link — Discord's CDN attachments expire in about a day. The evidence has a shorter
lifespan than the queue. So the reporting path does the preservation itself, at the moment of
filing, by a machine, because the moment is usually 2 a.m.

## The path

`/bugreport` opens a Discord modal: summary, what happened, where, whether it started after a
restart, any repro steps or debug log. Structured fields, because a free-form chat report is
missing exactly one crucial detail every time — and "where" and "since when" are the two that
separate a diagnosable report from a vibe.

Each submission runs through Claude (Haiku, because cheap and fast is the right tradeoff for
triage). It assigns a severity, categorizes the report, and flags likely duplicates against
open issues — flags, not merges, since duplicate-detection is a suggestion for a human, not a
verdict. The issue it drafts lands on a GitHub Projects bug board with the severity visible
at a glance. Triage doesn't fix anything. It means ten overlapping reports become one labeled
issue instead of ten pings.

At the same moment, log files and screenshots attached to the report get pulled and committed
to a private repo (capped per file, since players will absolutely attach a 2 GB debug log),
and the issue links to the archive. The host keeps logs until the next rotation; the report
keeps its evidence permanently.

## The ordering is the design

The step sequence encodes a priority: the GitHub issue is created first, and everything after
it — the Discord embed, the thread, the AI triage itself — is best-effort. If the Anthropic
API is down, the report still files, raw, with a needs-triage label. If Discord hiccups, the
issue exists anyway. A failed nicety never sinks a report, because the pipeline's one
non-negotiable job is that nothing a player took the time to write ever disappears.

Each issue also carries a verification checklist — reproduced on the server, fix confirmed,
player informed — and the instruction not to close until every box is ticked. The pipeline
automates intake and triage. It deliberately doesn't automate "done," because "done" is a
claim about the world, and the world is where the bug lives.

Node.js, discord.js modal interactions, the Anthropic API, GitHub GraphQL, and a git repo
doing archival duty. The bot source is in
[pz-rppvp-ops](https://github.com/docrickman/pz-rppvp-ops).
