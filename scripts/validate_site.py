#!/usr/bin/env python3
"""Lightweight checks for YAML front matter and duplicate permalinks."""

from __future__ import annotations

from pathlib import Path
import sys
import yaml

ROOT = Path(__file__).resolve().parents[1]
TARGETS = [ROOT / "_pages", ROOT / "_publications", ROOT / "_talks"]
errors: list[str] = []
permalinks: dict[str, Path] = {}
count = 0

for directory in TARGETS:
    for path in directory.rglob("*"):
        if path.suffix not in {".md", ".html"}:
            continue
        text = path.read_text(encoding="utf-8")
        if not text.startswith("---\n"):
            errors.append(f"Missing front matter: {path.relative_to(ROOT)}")
            continue
        try:
            _, front, _ = text.split("---", 2)
            data = yaml.safe_load(front) or {}
        except Exception as exc:
            errors.append(f"Invalid YAML: {path.relative_to(ROOT)}: {exc}")
            continue
        count += 1
        permalink = data.get("permalink")
        if permalink:
            if permalink in permalinks:
                errors.append(
                    f"Duplicate permalink {permalink}: {permalinks[permalink].relative_to(ROOT)} and {path.relative_to(ROOT)}"
                )
            permalinks[permalink] = path

if errors:
    print("\n".join(errors), file=sys.stderr)
    raise SystemExit(1)
print(f"Validated {count} content files and {len(permalinks)} unique permalinks.")
