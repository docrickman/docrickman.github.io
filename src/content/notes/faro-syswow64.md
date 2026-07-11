---
title: 'The 32-bit driver and the folder with the misleading name'
description: 'FARO imaging hardware that wouldn''t talk to Windows until its driver DLL was registered under SysWOW64.'
pubDate: 'Jun 23 2026'
---

Lab and instrument vendors ship 32-bit code long after the rest of the world has moved on, and
64-bit Windows will happily run it — through a compatibility layer with the most misleading
directory names in the operating system.

On 64-bit Windows, `System32` contains the 64-bit binaries, and `SysWOW64` contains the 32-bit
ones. The names are backwards for historical reasons (32-bit software hardcoded "System32"
everywhere, so the name had to stay), and the trap is exactly what it sounds like: register a
32-bit COM DLL with the 64-bit `regsvr32` and the registration lands on the wrong side of the
registry. The 32-bit application that needs it looks in its own view, finds nothing, and fails
with an error that says nothing about any of this.

That was the FARO imaging hardware's problem. The driver DLL was 32-bit; it had to be
registered with the `regsvr32` that lives under `SysWOW64`, at which point the device came up
and behaved.

The general lesson for lab IT: when instrument software fails in ways that make no sense,
check the bitness before anything else. A 30-year-old architecture decision is still deciding
whether your camera works.
