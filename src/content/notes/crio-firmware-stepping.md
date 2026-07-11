---
title: 'The firmware update that has to stop halfway'
description: 'A cRIO-9045 that couldn''t jump straight to current firmware. Sometimes "update failed" means "update differently."'
pubDate: 'Jun 9 2026'
---

A cRIO-9045 controller needed its firmware brought current, and the direct jump from the old
version to the latest one failed. Not with a helpful message. Just failed.

The answer wasn't in the error; it was in the upgrade path. Embedded and OT-class hardware
frequently can't migrate across a wide version gap in one hop — the new installer assumes
on-device state that only an intermediate version knows how to create. Desktop software papers
over this with migration code. Controller firmware often doesn't bother, because the vendor's
assumption is that you've been updating all along. On a machine that runs experiments and gets
touched twice a year, that assumption is wrong by default.

The fix was version stepping: old firmware to an intermediate release, then intermediate to
current. Both hops clean, controller healthy.

The transferable part: when embedded gear rejects an update, check the supported upgrade path
before assuming the update is broken. The matrix in the vendor's documentation is boring right
up until it's the entire answer.
