---
title: 'The 32-bit driver and the folder with the misleading name'
description: 'FARO imaging hardware that wouldn''t talk to Windows until its driver DLL was registered under SysWOW64.'
pubDate: 'Jun 23 2026'
---

Lab and instrument vendors ship 32-bit code long after the rest of the world has moved on.
Not out of laziness, exactly: an instrument that shipped with 32-bit acquisition software
in 2012 still works, the vendor's incentive to rewrite it is zero, and the lab's incentive to
replace a working instrument is less than zero. So 64-bit Windows keeps running this stuff
through a compatibility layer, and that layer has the most misleading directory names in the
operating system.

Here's the trap laid out flat. On 64-bit Windows, `System32` contains the **64-bit**
binaries. `SysWOW64` contains the **32-bit** ones. The names are exactly backwards from what
they say, and they're stuck that way for a historical reason: decades of software hardcoded
the path `System32`, so when Windows went 64-bit, that name had to keep pointing at whatever
matched the running process. The 32-bit world got shuffled off to a new folder named, of
course, WOW64, for "Windows on Windows 64."

It goes deeper than folders. The registry is split the same way: 32-bit COM registrations
live under `Wow6432Node`, invisible to 64-bit processes and vice versa. Which means there are
two copies of `regsvr32.exe`, one per world, and they are not interchangeable. Register a
32-bit COM DLL with the 64-bit `regsvr32` (the one you get by default) and the registration
may even report success. It just lands on the wrong side of the registry, where the 32-bit
application that needs it will never look. The app then fails with an error that mentions
none of this. Class not found. Device unavailable. Good luck.

That was the FARO imaging hardware's situation: 32-bit driver DLL, registered into the wrong
world, an application insisting its own driver didn't exist while the file sat right there on
disk. The fix was one line: run the registration with the `regsvr32` that lives under
`SysWOW64`. The device came up like nothing had ever been wrong.

The general lesson for lab IT: when instrument software fails in a way that makes no sense,
check the bitness before anything else. Of the process, of the DLL, of the registry view.
A thirty-year-old architecture decision is still deciding whether your camera works, and it
will outlive every machine in the building.
