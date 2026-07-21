#!/usr/bin/env python3
"""Create a new publication Markdown file for this Academic Pages site."""

from __future__ import annotations

import argparse
import re
import unicodedata
from datetime import date
from pathlib import Path


def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-zA-Z0-9]+", "-", value).strip("-").lower()


def quote(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--title", required=True)
    parser.add_argument("--citation", required=True, help="Full author/year/venue citation")
    parser.add_argument("--venue", required=True)
    parser.add_argument("--year", type=int, default=date.today().year)
    parser.add_argument("--area", choices=["methods", "informatics", "collaborative"], default="methods")
    parser.add_argument("--paper-url", default="")
    parser.add_argument("--selected", action="store_true")
    args = parser.parse_args()

    slug = slugify(args.title)
    path = Path("_publications") / f"{args.year}-{slug}.md"
    if path.exists():
        raise SystemExit(f"Refusing to overwrite {path}")

    lines = [
        "---",
        f"title: {quote(args.title)}",
        "collection: publications",
        f"permalink: /publication/{args.year}-{slug}/",
        f"date: {args.year}-01-01",
        f"year: {args.year}",
        f"venue: {quote(args.venue)}",
        f"research_area: {args.area}",
        f"sort_key: {args.year * 1000 + 999}",
        f"selected: {'true' if args.selected else 'false'}",
        f"citation: {quote(args.citation)}",
    ]
    if args.paper_url:
        lines.extend([
            f"paperurl: {quote(args.paper_url)}",
            "links:",
            f"  - label: Paper",
            f"    url: {quote(args.paper_url)}",
        ])
    lines.extend(["---", "", "{% include publication-links.html pub=page %}", ""])
    path.parent.mkdir(exist_ok=True)
    path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Created {path}")


if __name__ == "__main__":
    main()
