#!/bin/sh
# 用 headless Chrome 把 SVG 渲染成 PNG 预览：preview.sh <svg> <w> <h> <out.png> [bg]
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
SVG=$(cd "$(dirname "$1")" && pwd -W)/$(basename "$1")
BG=${5:-#223}
HTML="$(pwd)/.preview/_p.html"
echo "<html><body style='margin:0;background:$BG'><img src='file:///$SVG' width='$2' height='$3'></body></html>" > "$HTML"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --screenshot="$(pwd -W)/$4" --window-size=$2,$3 "file:///$(cd .preview && pwd -W)/_p.html" >/dev/null 2>&1
