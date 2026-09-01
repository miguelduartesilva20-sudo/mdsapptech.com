#!/usr/bin/env python3
"""
Renders a built page to PNG so changes can be eyeballed without a browser.

Inlines the stylesheet (the built HTML links it by absolute path, which does
not resolve from file://) and hands the result to QuickLook.

Usage: python3 tools/render-page.py dist/index.html out.png [width] [height]
"""
import pathlib
import re
import subprocess
import sys
import tempfile

def render(page: pathlib.Path, out: pathlib.Path, width=1440, offset=0, dark=False):
    html = page.read_text()
    dist = page.parents[len(page.relative_to("dist").parts) - 1] if False else pathlib.Path("dist")

    def inline(match):
        href = match.group(1)
        css = dist / href.lstrip("/")
        return f"<style>{css.read_text()}</style>" if css.exists() else ""

    html = re.sub(r'<link rel="stylesheet" href="(/_astro/[^"]+)"[^>]*>', inline, html)
    html = re.sub(r'<link rel="preload" as="style" href="/_astro/[^"]+"[^>]*>', "", html)
    # QuickLook lays the page out at roughly 1024 CSS pixels and scales the
    # bitmap up to -s. Pinning the body to a different width shears the
    # layout, so leave the width alone and treat this as a 1024px viewport.
    # `offset` scrolls the shot down the page, since QuickLook only ever
    # captures the first screenful.
    if offset:
        html = html.replace("<body>", f'<body style="margin-top:-{offset}px">')

    if dark:
        # QuickLook follows the system appearance, so the dark tokens are
        # promoted out of their media query to preview the dark palette.
        blocks = []
        for m in re.finditer(r"@media\s*\(prefers-color-scheme:\s*dark\)\s*\{", html):
            depth, i = 1, m.end()
            while depth and i < len(html):
                depth += (html[i] == "{") - (html[i] == "}")
                i += 1
            blocks.append(html[m.end():i - 1])
        html = html.replace("</head>", "<style>" + "".join(blocks) + "</style></head>")

    with tempfile.TemporaryDirectory() as tmp:
        tmp = pathlib.Path(tmp)
        (tmp / "page.html").write_text(html)
        subprocess.run(["qlmanage", "-t", "-s", str(width), "-o", str(tmp), str(tmp / "page.html")],
                       capture_output=True)
        shot = tmp / "page.html.png"
        if not shot.exists():
            print("qlmanage produced nothing", file=sys.stderr)
            return False
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_bytes(shot.read_bytes())
        return True

if __name__ == "__main__":
    page = pathlib.Path(sys.argv[1])
    out = pathlib.Path(sys.argv[2])
    w = int(sys.argv[3]) if len(sys.argv) > 3 else 1440
    off = int(sys.argv[4]) if len(sys.argv) > 4 else 0
    ok = render(page, out, w, off, "--dark" in sys.argv)
    print(f"{'rendered' if ok else 'failed'}: {out}")
