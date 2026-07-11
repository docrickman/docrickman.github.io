---
title: 'pz_log_watch: tailing a log over a protocol with no tail'
description: 'A Python poller that turns SFTP-only file access into a near-real-time error feed, with regexes rebuilt from real Build 42 logs.'
pubDate: 'Jul 6 2026'
---

The server host gives us SFTP and nothing else. No shell, no `tail -f`, no journal. Vetting
mods on a live server means seeing errors as they happen, not when someone remembers to pull
the log. So the watcher fakes a live tail over a protocol that only knows how to transfer
files.

## The mechanics

Poll the remote console log every three seconds, remember the byte offset last read, fetch
only what was appended since. Cheap enough to leave running all day. When the server
restarts, the log truncates. The watcher notices the file shrinking and restarts from zero
instead of missing the boot sequence, which is the most information-dense stretch of any
session.

Raw lines aren't events, though. A Java stack trace is one error spread across forty lines,
and forty Discord pings for one crash trains everyone to mute the channel. So the watcher
understands the log's actual grammar: in Build 42.19, every top-level line carries a
level-prefix (`ERROR: General ...`), and continuation frames are tab-indented. A record
starts at a level prefix; everything indented under it attaches to that record. One trace,
one event. On top of that sits a 60-second dedupe window: the same error signature repeating
gets suppressed and then summarized as "(repeated N times)," because the twelfth identical
nil-index error contains no twelfth piece of information.

Matched events append to a local flagged log and, optionally, post to a Discord webhook, so a
mod misbehaving mid-session surfaces in the ops channel while the players who triggered it
are still online to say what they were doing.

## The taxonomy, and an embarrassing correction

Events route through categories (Lua errors, config-load failures, workshop/download
problems, checksum mismatches, connection kicks), each a list of regexes. The first draft of
those regexes was plausible and wrong: written from assumption, "tested" against invented
samples. Worse, the assumed format was Build 41's (bracketed timestamps, `STACK TRACE`
delimiter lines), and the real B42.19 log contains zero occurrences of either. We caught it,
pulled real logs off the server, and rebuilt the patterns from actual strings.

The correction is now load-bearing in the code itself: every pattern is annotated
`[VERIFIED]` (grounded in a real log line) or `[GUESS]` (plausible, unconfirmed, replace when
reality provides a sample). The checksum category even documents its own false-positive
history: a bare "checksum" match lit up on benign startup hashes every boot, so the pattern
is anchored to problem context and the routine lines are explicitly ignored. A classifier
that knows which of its beliefs are evidence and which are hope is worth two that don't.

Nearly every mod problem we've diagnosed since (parse errors, missing dependencies, the
Linux case-sensitivity failures that plague Windows-authored mods on a Linux host) was
spotted by the watcher before any player noticed.

Python 3, paramiko, requests. Server identity and secrets come from environment variables;
nothing sensitive lives in the file. The script is in
[pz-rppvp-ops](https://github.com/docrickman/pz-rppvp-ops).
