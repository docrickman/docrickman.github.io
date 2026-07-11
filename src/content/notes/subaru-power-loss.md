---
title: 'The car that lost power in right turns'
description: 'A 2019 Impreza with intermittent total power loss, traced to a battery bracket that kept welding itself to the positive post.'
pubDate: 'Jun 3 2026'
---

The car lost power in right turns. Only right turns. That's not an electrical fault, that's a
mechanical fault with an electrical symptom — which is the observation that eventually cracked
it.

Intermittent faults are miserable because every test you run while the fault isn't happening
returns "fine." The way through is to stop testing components and start characterizing the
trigger. This trigger wasn't speed, temperature, or engine load. It was lateral force, in one
direction. Something conductive was moving.

Under cornering body flex, the metal battery hold-down bracket was contacting the positive
post. Direct short, voltage collapses, car goes dark. And because a dead short across a car
battery is briefly a welding rig, the bracket had twice arc-welded itself to the post. The
evidence was sitting right there as a bead of melted metal, for anyone who knew to read it.

The repair was trivial once the cause was known. The diagnosis is the story: characterize the
trigger, and the trigger names the fault class. Works on cars. Works on servers.
