---
title: 'Emote maker: a hand-rolled APNG encoder in the browser'
description: 'Wave, bounce, and marquee animation from any image, exported as APNG with full 8-bit alpha. No libraries, no CDN, works offline.'
pubDate: 'Jun 26 2026'
---

A browser tool for making animated emotes: upload an image, pick a motion mode (wave, bounce,
marquee), tune it, export. Platform presets know their targets' rules, like 7TV's 150-frame
cap, so an export that leaves the tool actually uploads.

The interesting part is the export. GIF has 1-bit alpha: a pixel is opaque or it isn't, so
anti-aliased edges get a crunchy halo on any background they weren't authored against. APNG
carries full 8-bit alpha, and browsers can't write it. Neither could any dependency I was
willing to take, because the other constraint was no libraries and no CDN — the tool is
self-contained and works offline.

So the encoder is hand-rolled from the PNG spec: chunk structure, CRC32 over the right byte
ranges, and the acTL/fcTL/fdAT frame sequencing that makes a PNG animate — including the
sequence numbering that decoders validate and the spec buries in a table. Producing bytes
that decoders accept is a different exercise from calling someone else's encode(). The spec
tells you what a valid file contains; it doesn't tell you which mistake you made when the
image viewer shows frame one and stops. That debugging loop, hex dump against spec table, is
the part of this project that taught the most.

GIF and WebM export are in there too, for the platforms that want them.
