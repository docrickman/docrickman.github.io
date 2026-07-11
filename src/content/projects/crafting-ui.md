---
title: 'A React prototype for an in-game crafting UI'
description: 'Prototype the interface where iteration is cheap, then port it to the game engine where it isn''t.'
pubDate: 'Jul 5 2026'
---

Project Zomboid's UI toolkit (ISUI) is imperative Kahlua Lua: manual layout, per-frame draw
calls, no reactivity. Iterating on interface design directly in it is slow enough that the
design stops improving.

So the crafting interface got prototyped in React first — a full interactive mockup, state and
all — where a layout idea costs thirty seconds to try. Once the design settled, the port maps
React's declarative model onto ISUI's imperative one: components become panels, state changes
become explicit redraws, layout becomes arithmetic.

The mapping itself got captured as a reusable skill (React-to-ISUI porting) so the second UI
won't have to rediscover it. Prototype where iteration is cheap. Ship where the players are.
