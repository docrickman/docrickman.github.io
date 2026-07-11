---
title: 'Mod suggestion bot: Discord intake, GitHub kanban backend'
description: 'Paste a Workshop link in Discord and it becomes a ticket moving through an 11-stage vetting pipeline, mirrored to a GitHub Projects board.'
pubDate: 'Jul 8 2026'
---

Our mod list is community-driven: players suggest Steam Workshop mods, and ATPot and I vet them
for balance, Build 42 compatibility, and fit with the ruleset. "I'll keep the list in my head"
stopped working around mod fifteen. We're past ninety.

Any Workshop link posted in the suggestions channel becomes a ticket, with the mod's real
title, author, and thumbnail pulled from Steam's public API (no key needed). Tickets move
through an 11-stage pipeline — Suggested, Vouched, Assessing, Testing, Configuring, Bug
Testing, On Hold, Approved, Staged, Live, Rejected — via a dropdown, and forum tags follow
along. Anyone can mark themselves Interested. Reviewers Vouch to commit to evaluating
something, which advances it automatically.

The bot runs on a home machine, not a VPS, and that's a design input rather than a compromise:
on every launch it scans the channel forward from where it left off and tickets anything posted
while it was down, deduped by Workshop ID. It doesn't need to be running to be correct.

Discord is the driver; GitHub is the deep-review workspace. Every ticket is also an issue on a
Projects v2 board. Status changes move the board column and swap labels, reviewer notes mirror
as issue comments, and Rejected or Live auto-closes with the right resolution. Comments made on
GitHub sync back to the Discord thread, so neither side goes stale.

A companion script, `post-bughunters.js`, closes the loop with players: after a batch of server
changes ships, it posts a plain-language summary to the bug-hunters channel. What changed, what
got fixed, what to test. The people filing reports hear back, which is most of why they keep
filing them.

Node.js 18+, discord.js, Steam's GetPublishedFileDetails endpoint, GitHub GraphQL for
Projects v2, JSON-file persistence. Source is in
[pz-rppvp-ops](https://github.com/docrickman/pz-rppvp-ops).
