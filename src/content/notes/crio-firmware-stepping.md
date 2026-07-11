---
title: 'The firmware update that has to stop halfway'
description: 'A cRIO-9045 that couldn''t jump straight to current firmware. Sometimes "update failed" means "update differently."'
pubDate: 'Jun 9 2026'
---

A cRIO-9045 (National Instruments' rugged controller line, the kind of box that runs a lab
rig unattended for months) needed its firmware brought current. The direct jump from the old
version to the latest failed. Not with a message that explained anything. Just failed, in the
way embedded tooling fails: tersely, and with total confidence that you'll figure it out.

The reflex when an update fails is to suspect the update: bad download, flaky USB, try again.
Three retries in, the theory of "transient glitch" is dead, and the better question surfaces:
is this jump even supported? For embedded and OT-class hardware the answer is frequently no.
A new firmware installer assumes things about what's already on the device: partition
layouts, bootloader versions, config formats. An intermediate release is often the thing
that *created* those assumptions. Desktop software papers over version gaps with migration
code, because desktop vendors assume nobody updates on schedule. Controller firmware
frequently doesn't bother, because the vendor's mental model is a device that gets updated
every cycle.

A lab controller doesn't live in that model. It lives in the opposite one: it runs
experiments around the clock, nobody touches it while the science is happening, and it might
see a maintenance window twice a year. By the time someone's standing in front of it with an
update, it can be four or five releases behind, deep in unsupported-jump territory. The
vendor's assumption and the machine's reality diverge, and the gap is exactly where this
failure lives.

The answer was in the upgrade-path documentation, not the error: step to a supported
intermediate version first, then from there to current. Both hops clean, controller healthy,
experiment none the wiser.

The transferable rule: when embedded gear rejects an update, check the supported upgrade path
before assuming the update is broken. The version matrix in the vendor docs is the most
boring page in the manual, right up until it's the entire answer. On OT hardware, it's the
entire answer more often than anywhere else in IT.
