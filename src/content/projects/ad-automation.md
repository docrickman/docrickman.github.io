---
title: 'AD automation: scripts you can trust at 4:50 on a Friday'
description: 'The patterns behind a production PowerShell suite for Active Directory work, rebuilt publicly as generic demonstrations — never copied from work.'
pubDate: 'Jun 15 2026'
---

My team's Active Directory work — bulk attribute updates from CSV, OU auditing, security-group
membership, license lifecycle, offboarding — runs on a PowerShell suite I evolved from a pile
of one-off scripts into production tooling. The code itself lives in a government-cloud tenant
and stays there. What appears publicly is reimplemented from scratch against a fictional
domain, because scrubbed code leaks structure and rewriting is cheaper than risk.

The patterns are the portfolio:

**Dry-run first.** Every tool that changes anything supports `-WhatIf` or a preview mode. You
see the complete list of what it's about to do before it does any of it.

**Two logs per run.** A full run log, and a change-only log. The second one exists because
that's the file you actually want when a question arrives with a deadline attached.

**Benign-error discrimination.** "User is already a member of the group" isn't a failure; a
permissions error is. The tools distinguish outcomes that mean stop from outcomes that mean
carry on, instead of painting the console red over both.

**Reversibility.** Offboarding records every group membership it removes, so an account can be
restored to its exact prior state. If you can't undo it, you shouldn't be automating it.

**Confirmed-change logging.** Writes are wrapped in try/catch with `-ErrorAction Stop`, so the
change log records what happened, not what was attempted.

The first public reimplementation is the CSV bulk-update tool, the densest showcase of these
patterns: [ad-csv-bulk-update](https://github.com/docrickman/ad-csv-bulk-update).
