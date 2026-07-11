---
title: 'A bug-report pipeline: Discord modal to triaged GitHub issue'
description: 'Players file /bugreport in Discord; Claude triages; the issue lands on a GitHub board with the server logs archived beside it.'
pubDate: 'Jul 10 2026'
---

Players are great at finding bugs and bad at reporting them. "Bandages crash the game" might be
a mod conflict, a load-order problem, or the engine. By the time anyone investigates, the server
log that would have settled it has rotated away.

So the reporting path does the preservation itself.

## The path

`/bugreport` in Discord opens a modal: what happened, what you expected, roughly when.
Structured fields, because a free-form chat report is missing exactly one crucial detail every
time.

Each submission runs through Claude (Haiku, because cheap and fast is the right tradeoff for
triage). It classifies the report, checks it against open issues for duplicates, and drafts a
technical summary from the player's plain-language description. Triage doesn't fix anything. It
means ten overlapping reports become one labeled issue instead of ten pings.

The issue lands on a GitHub Projects bug board. At the same moment, the relevant server logs are
pulled and committed to a private repo, and the issue links to them. The host keeps logs only
until the next rotation; the report keeps its evidence permanently.

## The constraint that shaped it

The server runs on a managed game host that offers SFTP and nothing else. No shell, no log
retention. Anything diagnostic has to be captured at the moment it matters, by a machine,
because the moment is usually 2 a.m.

Node.js, discord.js modal interactions, the Anthropic API, GitHub GraphQL, and a git repo doing
archival duty. The bot source is in
[pz-rppvp-ops](https://github.com/docrickman/pz-rppvp-ops).
