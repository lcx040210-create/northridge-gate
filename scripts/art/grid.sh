#!/bin/sh
# 多张 SVG 拼成一张预览：grid.sh <out.png> <cellW> <cellH> <svg...>
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
OUT=$1; CW=$2; CH=$3; shift 3
HTML="$(pwd)/.preview/_g.html"
echo "<html><body style='margin:0;background:#1c2024;display:flex;flex-wrap:wrap'>" > "$HTML"
N=0
for s in "$@"; do P=$(cd "$(dirname "$s")" && pwd -W)/$(basename "$s"); echo "<img src='file:///$P' width='$CW' height='$CH' style='object-fit:contain'>" >> "$HTML"; N=$((N+1)); done
echo "</body></html>" >> "$HTML"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --screenshot="$(pwd -W)/$OUT" --window-size=$((CW*N)),$CH "file:///$(cd .preview && pwd -W)/_g.html" >/dev/null 2>&1
