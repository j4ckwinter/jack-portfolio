---
title: "Performance audit: fixing a slow dashboard"
description: "Tracking down and fixing a 3s delay on the main dashboard after a dependency upgrade."
pubDate: 2025-02-05
---

After a dependency upgrade, our main dashboard started taking around 3 seconds to become interactive. This write-up summarises how we found and fixed it.

## What we saw

- LCP was fine; TTI and custom "dashboard ready" metrics had regressed.
- The slowdown only appeared in production builds, not in dev.

## What we did

1. **Profiled with Chrome DevTools** – Long tasks and heavy main-thread work after load.
2. **Checked the bundle** – A new transitive dependency was pulling in a large, un-tree-shaken library.
3. **Replaced it** with a smaller, purpose-built helper and re-measured.

## Outcome

Dashboard "ready" time back under 800ms. We added a simple budget check in CI so similar regressions get caught before merge.
