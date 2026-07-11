---
title: 'pz_log_watch: tailing a log over a protocol with no tail'
description: 'A Python poller that turns SFTP-only file access into a near-real-time error feed, with regexes rebuilt from real Build 42 logs.'
pubDate: 'Jul 6 2026'
---

The server host gives us SFTP and nothing else. No shell, no `tail -f`, no journal. Vetting
mods on a live server means seeing errors as they happen, not when someone remembers to pull
the log.

The watcher polls the remote console log on an interval, remembers the byte offset it last
read, and fetches only what was appended since. Cheap enough to run continuously. When the
server restarts, the log truncates; the watcher notices the file shrinking and restarts from
zero instead of missing the boot sequence, which is the most information-dense part of any
session. Flagged lines can post to a Discord webhook, so a mod misbehaving during a play
session surfaces in the ops channel while the players who triggered it are still online to say
what they were doing.

The part I'd defend in review is the error taxonomy. Build 42.19's dedicated-server log format
is its own dialect: LEVEL-prefixed lines, tab-indented stack traces, none of the bracketed
structure older documentation describes. The first draft of the matching regexes was plausible
and wrong — written from assumption and "tested" against invented samples. We caught that,
pulled real logs off the server, and rebuilt the patterns from actual strings. The classifier
now suppresses the engine's copious known ERROR-level noise and flags genuine mod failures.

Nearly every mod problem we've diagnosed since — parse errors, missing dependencies, the Linux
case-sensitivity failures that plague Windows-authored mods on a Linux host — was spotted by
the watcher before any player noticed.

Python 3, paramiko, requests. Secrets come from environment variables; nothing sensitive lives
in the file.
