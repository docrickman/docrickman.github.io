---
title: 'The loot saga: proving a bug wasn''t one'
description: 'Every player agreed loot was broken. A debug mod said the loot tables were fine. Both were right.'
pubDate: 'Jul 10 2026'
---

After ATPot and I activated a batch of ~96 mods, reports came in from every corner of the map:
no guns, no cookware, loot's broken. The obvious suspect was the gun-mod chain, which
deliberately removes vanilla firearms and substitutes its own — if it removed without inserting,
empty gun stores are exactly what you'd see.

The obvious move was to start patching loot tables. We measured instead.

## The instrument

DebugLootProbe is a small server-side mod in the game's Lua dialect (Kahlua). It dumps the
engine's runtime loot state: which distribution tables each item actually sits in after every
mod has applied its changes. Not what the mod files claim. What the engine loaded.

Verdict: the modded guns were present in 133 distribution tables. Vanilla firearms were gone, as
intended. Cookware was wired into kitchen pools correctly. The loot system was fine, and the
containers were still empty.

## The actual cause

Project Zomboid rolls a cell's loot once, on first load, and never again unless respawn is
enabled. Ours was off, on purpose, for a scarcity ruleset. An earlier soft wipe had reset player
data but kept the map — so every explored cell was still serving loot rolled under the old mod
list. The new mods weren't broken. They'd just never been rolled anywhere anyone had been.

## The fix

A full world wipe, config and mods preserved, old world parked as a recoverable backup first.
Every cell re-rolls under the current modpack. Lines of code shipped to fix loot: zero.

The probe stayed loaded for one more boot to verify the fresh world, then got pulled.
Instrument, read the answer, put the instrument away.
