---
title: 'Documentation change management, as a design problem'
description: 'A Jira-based workflow giving KB changes an audit trail: who approved what, when, and where the known gaps are.'
pubDate: 'Jul 8 2026'
---

Our documentation process was: someone spots a problem, copies the page into their personal
space, edits, and a weekly meeting nods it into production. No approver trail. No record of
gaps we knew about but hadn't fixed. That holds up until someone asks "who approved this and
when," and in a compliance-heavy environment that question is a when, not an if.

The design I wrote splits the system along one hard line: Jira is the change record, Confluence
is the content. The moment document content starts living in tickets, people are maintaining it
in two places, and shortly after that they're routing around the workflow entirely. Every other
decision in the design exists to defend that line.

Two issue types, not five. A single Documentation Change type with a change-type field covers
new, edit, and retire; separate issue types for each would shred the board for no benefit. Gap
is the one type that earns its own existence, because a gap can be legitimately deferred and a
change can't — and the gap register is half the reason to build any of this.

The audit trail costs nothing. Jira already logs every transition with user and timestamp. The
single thing to enforce is a required approver field on the review-to-approved transition. That
one constraint converts "we discussed it in a meeting" into "signed off by this person on this
date."

Design work, described at the pattern level.
