#!/usr/bin/env python3
"""
Builds one self-contained file out of the split project.

    python3 build.py            -> preview.html
    python3 build.py nubook.html

Pastes the styles, the script and every image (as base64) inside, so the
result works with no local server and can be opened or sent as a single
file. The project folder stays the source of truth: this file is always a
result, never edit it by hand.
"""
import base64, mimetypes, re, sys
from pathlib import Path

ROOT = Path(__file__).parent
OUT = Path(sys.argv[1] if len(sys.argv) > 1 else "preview.html")


def data_uri(rel_path: str) -> str:
    f = ROOT / rel_path
    mime = mimetypes.guess_type(f.name)[0] or "application/octet-stream"
    return f"data:{mime};base64," + base64.b64encode(f.read_bytes()).decode()


def main() -> None:
    html = (ROOT / "index.html").read_text()
    css = (ROOT / "css/styles.css").read_text()
    js = (ROOT / "js/app.js").read_text()

    # assets referenced from the script, e.g. const COVER_X = "assets/covers/x.jpg"
    # A reference with no file behind it is left alone and reported: crashing the
    # whole build on one bad path hides which path it was.
    def inline(m):
        rel = m.group(1)
        if not (ROOT / rel).exists():
            print(f"  warning: skipped missing file {rel}")
            return m.group(0)
        return '"' + data_uri(rel) + '"'

    js = re.sub(r'"(assets/[^"]+)"', inline, js)

    # plain replace, not re.sub: css/js contain backslashes that would be
    # read as escape sequences in a regex replacement string
    html = html.replace(
        '<link rel="stylesheet" href="css/styles.css">',
        "<style>\n" + css + "\n</style>",
    )
    html = html.replace(
        '<script src="js/app.js"></script>',
        "<script>\n" + js + "\n</script>",
    )

    (ROOT / OUT).write_text(html)
    size = (ROOT / OUT).stat().st_size / 1e6
    print(f"{OUT} built - {size:.2f} MB")


if __name__ == "__main__":
    main()
