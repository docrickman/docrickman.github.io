---
title: 'Bisecting a black laptop screen'
description: 'A ThinkPad P14s Gen 3 with a dead internal panel, isolated to the physical display path without opening the machine.'
pubDate: 'Jul 6 2026'
---

A ThinkPad P14s Gen 3 with a black internal screen is one symptom and at least five suspects:
firmware, GPU, graphics driver, the panel, or the cable feeding it.

The method is bisection, and each cut is nearly free. Plug in an external monitor: it works, so
the GPU renders and the OS is alive, which drops software and graphics silicon off the list in
one move. Watch the internal panel during boot: the firmware screens don't appear on it either,
and firmware draws long before the OS or its drivers load, so everything software-side is now
eliminated twice over.

What remains is the physical display path — the panel or the connection feeding it. That's
where this one landed: a hardware repair, dispatched with the fault already localized instead
of "symptom: broken, please advise."

Minutes of triage, no parts swapped on a guess. The write-up is short because the method is
short. That's the appeal of it.
