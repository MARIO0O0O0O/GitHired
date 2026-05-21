#!/data/data/com.termux/files/usr/bin/bash
# FOLIO Bootstrap v3.0
# chmod +x ~/jobapps/folio_bootstrap.sh && bash ~/jobapps/folio_bootstrap.sh

# FOLIO Bootstrap v3.0
# chmod +x ~/jobapps/folio_bootstrap.sh && bash ~/jobapps/folio_bootstrap.sh

echo ""
echo "════════════════════════════════════════════"
echo "  FOLIO Bootstrap v3.0"
echo "  Owner: Mario A. Espindola"
echo "════════════════════════════════════════════"

echo "[1/9] Base packages..."
pkg update -y && pkg upgrade -y
pkg install -y git curl wget python nodejs jq nano unzip

echo "[2/9] Python tools..."
pip install playwright jinja2 pdfminer.six supabase python-dotenv rich
pip install resume-matcher || echo "  resume-matcher: install manually if this fails"

echo "[3/9] Playwright Chromium..."
playwright install chromium || echo "  Use proot Ubuntu if Chromium fails natively."

echo "[4/9] Node CLI tools..."
npm install -g supabase netlify-cli

echo "[5/9] Gemini CLI..."
npm install -g @google/gemini-cli 2>/dev/null || npm install -g gemini-cli

echo "[6/9] Goose..."
pip install goose-ai 2>/dev/null || { pip install pipx && pipx install goose-ai; }

echo "[7/9] Directories..."
mkdir -p ~/jobapps/{prompts,output,agents,dashboard}
mkdir -p ~/.gemini/agents

echo "[8/9] Syncing agents..."
for f in ~/jobapps/agents/*.md; do
  cp "$f" ~/.gemini/agents/ && echo "  copied: $(basename $f)"
done

echo "[9/9] Permissions..."
chmod +x ~/jobapps/folio_bootstrap.sh

echo ""
echo "════════════════════════════════════════════"
echo "  Verifying installs..."
command -v gemini   && echo "  ✓ Gemini CLI"   || echo "  ✗ Gemini CLI"
command -v goose    && echo "  ✓ Goose"        || echo "  ✗ Goose"
command -v supabase && echo "  ✓ Supabase CLI" || echo "  ✗ Supabase CLI"
command -v netlify  && echo "  ✓ Netlify CLI"  || echo "  ✗ Netlify CLI"
echo ""
echo "  Next steps:"
echo "  1. gemini auth login"
echo "  2. supabase login"
echo "  3. netlify login"
echo "  4. goose run --recipe ~/jobapps/folio_recipe.yaml"
echo "════════════════════════════════════════════"
