# RecentProfit Data Research v1.0

This repository packages RecentProfit's U.S. brand purchase-condition research as fact-level and comparison datasets. The canonical human-readable documentation, methodology, source links, and version history are on [RecentProfit Data Research](https://recentprofit.com/data-research).

- Author: RecentProfit
- Schema version: v1.0
- Data version: 2026-09-13
- Region / currency: US / USD
- Brands: 33
- Current fact rows: 212
- License: [MIT](LICENSE)

## Data files

- `data/recentprofit-brand-facts.csv` — fact-level long table with one row per brand fact.
- `data/recentprofit-brand-facts.json` — fact-level JSON with dataset metadata, field definitions, controlled vocabulary, and fact records.
- `data/recentprofit-brand-comparison.csv` — comparison / wide table with one row per brand and fact-specific value and status columns.
- `data/recentprofit-brand-comparison.json` — comparison / wide JSON with dataset metadata, controlled vocabulary, fact names, and brand records.

`README.md` documents the package and `LICENSE` contains the MIT license text.

## Citation guidance

When citing a fact, include the dataset name, data version, brand, fact name, and the linked official source. Do not imply that a historical fact is current.

Suggested format:

> RecentProfit. “RecentProfit Data Asset v1.0.” Data version 2026-09-13. Brand: `<brand_name>`. Fact: `<fact_name>`. Official source: `<official_source>`. https://recentprofit.com/data-research

## Scope and method

The fact-level files retain the brand, region, currency, fact name, value, supporting quote, official source, validity dates, review dates, change information, and fetch status. The comparison files reshape current facts into one record per brand for cross-brand analysis.

Facts come from published RecentProfit Brand Pages and their reviewed official brand sources. Third-party coupon sites are excluded. Missing policies do not create fact rows, and unverified or not-applicable statuses are not treated as ordinary fact values.

This is a dated research snapshot, not a promise that an offer remains available. Review the cited official source before relying on a discount or policy.

## License

Dataset structure and RecentProfit-authored summaries are released under the [MIT License](LICENSE). Brand names and official-source content remain the property of their respective owners.
