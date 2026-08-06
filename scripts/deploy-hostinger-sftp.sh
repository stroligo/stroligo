#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
KEY="${HOME}/.ssh/stroligo_hostinger"
HOST="77.37.127.219"
PORT="65002"
USER="u317256614"

if [ ! -f .output/public/index.html ]; then
  npx nuxt prepare
  npm run generate
fi

rsync -avz --delete \
  -e "ssh -i ${KEY} -p ${PORT} -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new" \
  .output/public/ \
  "${USER}@${HOST}:public_html/"

echo "Deploy done."
ssh -i "$KEY" -p "$PORT" -o IdentitiesOnly=yes "$USER@$HOST" \
  'echo -n "index: "; test -f public_html/index.html && echo OK; echo -n "_nuxt files: "; find public_html/_nuxt -type f 2>/dev/null | wc -l'
