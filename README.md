# Official Brand Savings Data

This repository contains a point-in-time dataset of U.S. savings, promo-code availability, shipping terms, return policies, and eligibility-based discounts found on brand-owned websites.

The human-readable pages that correspond to this snapshot are maintained by [RecentProfit](https://recentprofit.com).

- Author: RecentProfit
- License: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## Files

- `data/official-brand-savings.csv` — one row per official-source offer or policy.
- `data/official-brand-savings.json` — the same snapshot grouped by brand.
- `BRANDS.md` — a compact brand-by-brand index.
- `scripts/check-sources.mjs` — checks whether each cited official URL still responds.
- `assets/recentprofit-avatar.png` — shared profile image for published dataset records.

## Snapshot

- Verified date: 2026-09-12
- Brands: 20
- Official-source records: 49
- Brands with a directly displayed public code: 2

This is a dated research snapshot, not a promise that an offer remains available. Always review the cited brand-owned page and checkout terms before relying on a discount.

## Method

1. Include only brand-owned U.S. pages or official brand support pages.
2. Record the offer, qualification conditions, source URL, and verification date.
3. Leave the public-code field empty unless the official page directly displays the code.
4. Do not use third-party coupon sites, forums, or community reposts as evidence.

## Check source availability

Requires Node.js 20 or newer.

```sh
node scripts/check-sources.mjs
```

The checker reports successful responses, redirects, access-restricted responses, and apparent failures. A restricted response such as HTTP 403 or 429 is reported separately because it does not prove that a page has disappeared.
