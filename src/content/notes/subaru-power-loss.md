---
title: 'The car that lost power in right turns'
description: 'A 2019 Impreza with intermittent total power loss, traced to a battery bracket that kept welding itself to the positive post.'
pubDate: 'Jun 3 2026'
---

The car lost power in right turns. Only right turns. That's not an electrical fault, that's a
mechanical fault with an electrical symptom — and that observation is what eventually cracked
it. It just took me a while to let myself believe it.

Some backstory, because the dash made this harder than it needed to be. Before the power loss
showed up, the car had already thrown a check engine light and traction-control warnings, plus
a CVT that felt vaguely off. Three symptoms, none obviously related, and my first theory was
the cheapest, least alarming one available. That's worth admitting because it's a pattern:
when a fault is scary, the comfortable explanation applies for the job first. It's also
usually wrong, and the discount should make you suspicious.

Intermittent faults are miserable for a specific reason: every test you run while the fault
isn't happening returns "fine." Battery reads fine. Connections look fine. Codes are vague.
You can burn weekends swapping parts on a car that passes every bench test you can throw at
it. The move that actually works is to stop interrogating components and start characterizing
the trigger. When exactly does it happen? Not speed — happened slow and fast. Not temperature,
not engine load. Lateral force. In one direction. Something conductive was moving, and it only
moved when the body rolled left.

Once the question became "what conductive thing near the battery moves under right-turn body
flex," the answer was sitting in plain sight: the metal battery hold-down bracket, close
enough to the positive post to kiss it when the chassis flexed. Direct short, voltage
collapses, every module on the bus browns out at once — which retroactively explained the
scattershot warnings. The modules weren't failing. They were all victims of the same sag.

The confirming evidence was better than a code: a dead short across a car battery is briefly
a welding rig, and the bracket had twice arc-welded itself to the post. A bead of melted
metal, right there, for anyone who knew what it meant. The car had been documenting its own
fault the whole time.

The repair was ten minutes and a piece of insulation. The diagnosis is the story:
characterize the trigger, and the trigger names the fault class. Works on cars. Works on
servers. Works on anything that only breaks when nobody's testing it.
