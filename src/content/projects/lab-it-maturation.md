---
title: 'Maturing IT for a lab environment'
description: 'Turning ad-hoc lab support into a deliberate function: inventory, process, training, and a Purdue-model gap analysis of lab assets.'
pubDate: 'Jun 2 2026'
---

The lab machines at a nuclear R&D company aren't office endpoints. LabVIEW rigs and cRIO
controllers run experiments around the clock, instruments come with vendor-locked software,
and some machines are air-gapped by policy. You can't patch on Tuesday because it's Tuesday.
Enterprise IT process mostly doesn't fit, and the historical result was lab support running on
tribal knowledge.

I've been running a program to replace the tribal knowledge with a function. A real asset
inventory — custodians, lifecycle, peripherals, software — instead of a spreadsheet of
hostnames. Documented support processes and decision frameworks, so "what do we do when an
instrument PC dies mid-experiment" has an answer that doesn't depend on who's on shift. A
revised SLA that's honest about what 24/7 experiments require. A technician training path, so
the next person ramps in weeks rather than by osmosis.

The piece that points at where I'm headed: a Purdue-model (PERA) classification of the lab
assets, sorting what exists into levels and mapping the gaps between how OT should be
segmented and how it currently is. That analysis is the first concrete artifact on the
OT/IT-convergence path, with GICSP as the next milestone.

Everything here is described at the pattern level. The inventory, the frameworks, and the
analysis itself stay inside the fence.
