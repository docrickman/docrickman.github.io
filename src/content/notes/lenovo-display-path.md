---
title: 'Bisecting a black laptop screen'
description: 'A ThinkPad P14s Gen 3 with a dead internal panel, isolated to the physical display path without opening the machine.'
pubDate: 'Jul 6 2026'
---

A ThinkPad P14s Gen 3 came in with a black internal screen. One symptom, at least five
suspects: firmware, GPU, graphics driver, the panel itself, or the cable feeding it. The
tempting move at a helpdesk is to start with the software end — reinstall the driver, reimage
if that fails — because those are the tools within reach. That's backwards. Reimaging is
hours, and it tests the suspect *least* likely to produce a screen that's black from the
moment power hits.

The method is bisection, and the whole point is that each cut is nearly free.

Cut one: plug in an external monitor. It works. That single observation clears half the board
in one move — the GPU renders, the OS is up, the driver is loading. Whatever's wrong lives
somewhere between the graphics output and the internal glass.

Cut two: watch the internal panel from cold boot. The firmware splash never appears on it.
Firmware draws long before Windows or any driver exists, so everything software-side is now
eliminated a second time, independently. Two cheap observations, and five suspects are down
to two: the panel, or the cable and connectors feeding it.

That's where triage correctly stops. Panel-versus-cable is a teardown question, and the
machine goes to hardware repair either way — but it goes with "fault isolated to the internal
display path; GPU, OS, and driver confirmed good" instead of "screen broken, please advise."
The difference matters at both ends: no repair tech burns time re-proving what triage already
proved, and nobody reimages a machine to fix a cable.

Total cost: an external monitor, one reboot, a few minutes of looking. No parts swapped on a
guess, no drivers reinstalled out of ritual. The write-up is short because the method is
short. That's the appeal of it.
