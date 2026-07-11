---
title: 'Version control for a team that had never used it'
description: 'Introducing Git and change review to production helpdesk scripts, and writing the guide that made technicians actually adopt it.'
pubDate: 'May 20 2026'
---

When I started, my team's production scripts lived wherever they'd last been saved. No history,
no review, no way to know whether the copy you were about to run was the current one. Standard
for a helpdesk. Not acceptable for scripts that touch every account in the company.

The fix had two halves, and the second was harder.

The mechanical half: a repo for production scripts, a change-review step before anything
lands, and a working definition of what "production" means. Nothing clever here; the whole
point is that it's boring.

The adoption half: my teammates are good technicians, not programmers, and a Git tutorial
written for developers is useless to them. So I wrote an onboarding guide that assumes zero
programming background. GitHub plus VSCode, screenshots, the four operations they'd actually
use, and none of the branching theory they wouldn't. Writing for the reader you have, instead
of the reader the tooling assumes, is most of what made this stick.

Described at the pattern level; the internal guide stays internal.
