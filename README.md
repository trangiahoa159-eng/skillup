# SkillUp — what changed in this pass

This is your real project with the individual-skill-page layer (Layer C)
refactored, plus one bug fix. Nothing else was touched.

## What I changed

1. **`pages/a.selfdiscovery.html`** — was ~1050 lines, now 20. All the
   styling/logic moved to two new shared files (below); this file just
   loads them plus its own content.
2. **New: `shared/styles.css`** — every CSS rule from the old
   `a.selfdiscovery.html`'s `<style>` block, extracted once.
3. **New: `shared/engine.js`** — every function from the old
   `a.selfdiscovery.html`'s `<script>` block (tab switching, quiz logic,
   scoring, results screen), extracted once. Reads `window.SKILL_DATA`
   to know what to render.
4. **New: `data/a.selfdiscovery.data.js`** — the content that's actually
   unique to Self-Discovery: the definition, 4 pillars, 4 action-framework
   items, pro-tip, and all 24 quiz questions (verified — same count as
   your original file). This is the only file with self-discovery-specific
   text in it now.
5. **New: `pages/TEMPLATE.html`** and **`data/TEMPLATE.data.js`** — copy
   these two for every other skill (self-perception, values identification,
   goal setting's siblings, etc.) instead of writing a page from scratch.
6. **Bug fix:** `pages/01.html` and `pages/02.html` were linking
   `../assets/css/style.css`, which doesn't exist (your `assets/` folder is
   empty) — this was a silent 404, harmless only because both pages also
   have their own full inline `<style>` block. Fixed to point at the real
   `../css/style.css`.

## What I deliberately left alone

- **`pages/ab.goalsetting.html`** — untouched, per your call. It still uses
  its own older template (Poppins font, form-based quiz). It is NOT wired
  into the shared engine, so editing `shared/engine.js` later won't affect it.
- **`pages/01.html` / `pages/02.html`** (hex / petal category pickers) —
  untouched apart from the path fix. You confirmed the different visual
  themes per category are intentional, so these stay as separate,
  self-contained files, each with their own inline `<style>` + `skillData`.
- **`pages/03.html`** — untouched stub, not built yet.
- **All ~30 empty (`0 KB`) subskill pages** — untouched. Fill them in using
  the process below whenever you have their content.
- **`index.html`, `2.html`, `3.html`, `css/style.css`, `assets/`** — untouched.

## How to add content to an empty subskill page (e.g. `a.selfperception.html`)

1. Copy `data/TEMPLATE.data.js` → `data/a.selfperception.data.js`.
   Fill in `badge`, `title`, `subtitle`, `backLink`, `definition`, `pillars`,
   `actions`, `proTip`, and `quizBank`. Comments in the file explain each field.
2. Copy `pages/TEMPLATE.html` → replace the *empty* `pages/a.selfperception.html`.
   Change the `<title>` and the `<script src="../data/...">` line to point at
   your new data file from step 1.
3. That's it — no CSS or JS to write. `pages/01.html` already links to
   `a.selfperception.html` in its `skillData.awareness.subSkills` array, so
   it'll work immediately once the file has real content instead of being empty.

Repeat for each of the ~29 remaining stub pages as you're ready with content.
Paste me the content for any of them and I'll wire it up directly.

## How to run it

No build step — static files. From the project root:
```
python -m http.server 8000
```
then open `http://localhost:8000/index.html` and click through:
Home → Skills → Oneself → Self-Discovery.

## If you later change something in `shared/engine.js` or `shared/styles.css`

Every page that uses the TEMPLATE pattern (currently just
`a.selfdiscovery.html`, and whatever you build next) picks up the change
automatically. `ab.goalsetting.html` and the hub pages (`01.html`/`02.html`)
will NOT be affected, since they don't load these shared files.

## Next thing worth doing

Once you've filled in a handful of the "awareness" cluster pages
(self-perception, self-reflection, strengths & weaknesses, values
identification, johari window), it's worth a quick pass checking that
each `url` in `pages/01.html`'s `skillData.awareness.subSkills` array
actually matches the filename you used — a typo there is the most likely
way a finished page ends up unreachable from the hub.


## Close Relationship quiz update
Added 5 Close Relationship sub-skills. Each contains exactly 10 focused MCQs with A-D options, one correctIndex, and explanations for all four choices, plus Essential Knowledge content.


Close Relationship fixed build: every listed sub-skill now has its own page and 10 focused MCQs. The cards on pages/02.html are clickable.
