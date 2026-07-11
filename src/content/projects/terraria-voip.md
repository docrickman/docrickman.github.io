---
title: 'Terraria VOIP mod: positional voice in a 2D world'
description: 'Mic capture, Opus, and binaural spatialization in C# on tModLoader. Unfinished, and honest about which parts work.'
pubDate: 'Jun 4 2026'
---

A proximity-voice mod for Terraria, written in C# against tModLoader. Microphone capture
through NAudio, Opus for the codec, and spatialization so a voice sounds like it's coming from
where its player is standing.

The spatialization is where it got interesting. The working implementation approximates
binaural hearing directly: interaural time difference (the sub-millisecond delay between your
ears) plus a head-shadow filter (your skull muffles high frequencies arriving from the far
side). Cheap to compute and convincingly directional for a 2D world.

The investigated next step is OpenAL Soft for true HRTF, occlusion, and cross-platform output.
In modded-game land that's mostly a distribution problem: extracting the right native library
per platform at runtime and wiring it up with a DllImportResolver so the managed code can find
it. That bootstrap is designed and researched, not shipped.

So, status, plainly: capture, encoding, and the ITD/head-shadow path work; the OpenAL migration
is a plan with evidence behind it; the mod as a whole is unfinished. It's on this site because
the exploration is the value — it's the project where I learned how humans locate sound.
