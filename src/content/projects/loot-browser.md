---
title: 'Loot browser: the whole loot economy in one HTML file'
description: 'Every Build 42 loot table (vanilla plus ~90 mods, with weights) in a single self-contained page you can search from a phone.'
pubDate: 'Jul 9 2026'
---

On a scarcity ruleset, loot is the economy, and tuning an economy you can't see is guesswork.
While chasing [the loot saga](/projects/loot-saga/) we extracted the complete picture of what
can spawn where. It was too useful to leave in a debug dump.

The extraction covers the full Build 42.19 distribution system as it runs on our server: every
vanilla table plus the modifications from roughly ninety mods, resolved in load order, with
per-item spawn weights. It exists as JSON for tooling, Markdown for grepping during config
work, and one more form.

`loot-browser.html` is a single file. Data, styling, and search logic inlined; no server, no
dependencies, no build step. Open it on a phone, type an item name, and see every container
pool it spawns in and at what weight. Or go the other way and browse a container.

The single-file constraint is the point. You can drop it in a Discord channel, and a GM
mid-session can answer "can antibiotics spawn in medical cabinets" in seconds without anyone
standing up a service.

It earns its keep three ways: sanity-checking rarity-factor changes against the loot tiers
players actually care about, planning scarcity events against real spawn data instead of vibes,
and turning "loot feels wrong" reports into checkable claims.

The browser and tables are published in
[pz-loot-browser](https://github.com/docrickman/pz-loot-browser), and the working copy lives
alongside the rest of the server tooling in
[pz-rppvp-ops](https://github.com/docrickman/pz-rppvp-ops).
