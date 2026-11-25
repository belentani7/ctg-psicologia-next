#!/usr/bin/env bash
# make-og.sh — genera public/og.png (1200×630) con la identidad de la marca.
#
# Uso:
#   ./scripts/make-og.sh            # escribe public/og.png
#   ./scripts/make-og.sh --help
#
# Requiere ImageMagick (`convert`). El PNG resultante se versiona, así que este
# script solo hace falta para volver a generarlo tras un cambio de marca.

set -euo pipefail

if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  cat <<'TXT'
make-og.sh — regenera la imagen Open Graph (1200x630)

Uso:
  ./scripts/make-og.sh

Salida:
  public/og.png

Requiere: ImageMagick (convert) con las fuentes DejaVu.
TXT
  exit 0
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="${ROOT}/public/og.png"

convert -size 1200x630 gradient:'#134e4a-#0f766e' \
  -fill '#5eead4' -stroke none \
  -draw "path 'M 0,470 C 200,410 340,520 560,470 S 940,400 1200,460 L 1200,630 L 0,630 Z'" \
  -fill 'rgba(15,118,110,0.55)' -stroke none \
  -draw "path 'M 0,520 C 260,470 420,560 640,520 S 1000,470 1200,520 L 1200,630 L 0,630 Z'" \
  -fill '#ffffff' -font DejaVu-Serif-Bold -pointsize 84 \
  -annotate +80+220 'cTg Psicología' \
  -fill '#d1fae5' -font DejaVu-Sans -pointsize 34 \
  -annotate +82+285 'Centro de Terapia Global · L’Hospitalet de Llobregat' \
  -fill '#ffffff' -font DejaVu-Sans -pointsize 30 \
  -annotate +82+370 '+34 605 362 664  ·  centre@ctgterapiaglobal.com' \
  -fill '#5eead4' -draw 'roundrectangle 80,400 200,410 5,5' \
  "${OUT}"

identify "${OUT}"
echo "OK  generado ${OUT}"
