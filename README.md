# Appy Creatives — Portfolio Website

A clean, dark, "video timeline" themed one-page portfolio site for a video
editor / motion graphics artist. Plain HTML, CSS and JavaScript — **no
build tools, no frameworks, no backend**. You can open it directly in a
browser or deploy it to Vercel in a few clicks.

## What's in this folder

```
appy-creatives-portfolio/
├── index.html        ← all the page content (text, sections, YouTube links)
├── style.css          ← all the visual design (colors, fonts, layout, animation)
├── script.js           ← small behaviors (scroll bar, mobile menu, testimonial slider)
├── assets/
│   └── favicon.svg     ← the little icon shown in the browser tab
├── .gitignore
└── README.md            ← this file
```

That's the whole project. Everything the browser needs is in these files —
there's nothing to install to make the site *work*. You only install
things below to make editing and previewing easier.

## Design notes (so you know what you're looking at)

The whole site is built around the idea of a video editing timeline:

- The thin bar under the header fills left-to-right as you scroll, like a
  playhead moving across a timeline.
- Your short-form work and long-form work are shown as two horizontal
  "tracks" you can scroll through, styled like clips on a timeline.
- Testimonials are shown one at a time, styled like subtitles/captions
  with a "lower third" name tag underneath — like a caption burned into
  a video.
- The color palette is a near-black charcoal background with one accent
  color (a red-orange, like a camera's recording tally light).

---

## 1. Set up the project in VS Code

1. **Install VS Code** (if you don't have it): https://code.visualstudio.com/
2. **Install Node.js** (only needed for the local preview server in step 2):
   https://nodejs.org/ — download the "LTS" version and run the installer,
   clicking through with the defaults.
3. Save this whole `appy-creatives-portfolio` folder somewhere on your
   computer, e.g. `Documents/appy-creatives-portfolio`.
4. Open VS Code → **File → Open Folder…** → select `appy-creatives-portfolio`.
5. (Recommended) In VS Code's Extensions panel (the icon on the left
   sidebar that looks like four squares), search for and install
   **"Live Server"** by Ritwick Dey. This lets you preview the site with
   auto-refresh whenever you save a file.

## 2. Run it locally

**Easiest way (Live Server extension):**
1. In VS Code's file explorer, right-click `index.html`.
2. Click **"Open with Live Server."**
3. Your browser opens automatically at something like
   `http://127.0.0.1:5500` showing the live site. Edit any file, save, and
   the browser refreshes on its own.

**Without any extension:** you can also just double-click `index.html` in
your file explorer to open it straight in a browser. This works fine for
looking at text and layout, but a few browsers restrict local video
embeds slightly — Live Server (or the deployed Vercel version) is more
reliable for previewing the YouTube embeds.

## 3. Upload the project to GitHub

1. Create a free account at https://github.com if you don't have one.
2. Click the **"+"** in the top-right corner → **"New repository."**
3. Name it something like `appy-creatives-portfolio`, keep it **Public**
   (or Private, your choice), and click **"Create repository."** Don't
   check any of the "initialize with..." boxes — you already have files.
4. GitHub will show you a page with some commands. In VS Code, open the
   built-in terminal: **Terminal → New Terminal**. Then run these one at a
   time, replacing `YOUR-USERNAME` with your actual GitHub username:

   ```
   git init
   git add .
   git commit -m "First version of my portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/appy-creatives-portfolio.git
   git push -u origin main
   ```

   If `git` isn't recognized, install it from https://git-scm.com/downloads
   first, then restart VS Code and try again.
5. Refresh your GitHub repository page — your files should now be there.

**Making future updates:** any time you change a file and want it saved to
GitHub, run these three lines in the terminal:
```
git add .
git commit -m "Describe what you changed"
git push
```

## 4. Deploy it to Vercel (free)

1. Go to https://vercel.com and click **"Sign Up."** Choose **"Continue
   with GitHub"** so the two accounts are linked.
2. On your Vercel dashboard, click **"Add New… → Project."**
3. Find `appy-creatives-portfolio` in the list of your GitHub repos and
   click **"Import."**
4. Vercel will detect it as a static site — you don't need to change any
   settings (leave "Framework Preset" as **"Other"**, and the Build
   Command / Output Directory fields empty).
5. Click **"Deploy."** After about 30 seconds, Vercel gives you a live
   link like `appy-creatives-portfolio.vercel.app` — that's your website,
   live on the internet.
6. **Every time you `git push` to GitHub from now on, Vercel automatically
   redeploys your site with the changes** — no extra steps needed.

If you'd rather not use git commands at all, Vercel also lets you drag and
drop the whole project folder directly on the "Add New Project" screen —
git/GitHub is recommended, though, since it also backs up your code.

## 5. Add your real YouTube videos

Every video on the site is a placeholder right now. In `index.html`,
search for the text `YOUTUBE_VIDEO_ID` (Ctrl+F / Cmd+F in VS Code, or use
**Edit → Find in Files** to see every occurrence at once). You'll find
lines that look like this:

```html
<iframe src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_SHORT_1" ...>
```

To fix one:
1. Open the real video on YouTube.
2. Copy its **video ID** — the part of the URL after `watch?v=`
   (e.g. for `https://www.youtube.com/watch?v=dQw4w9WgXcQ` the ID is
   `dQw4w9WgXcQ`), or after `youtu.be/` if it's a shortened link.
3. Replace only the placeholder text (e.g. `YOUTUBE_VIDEO_ID_SHORT_1`)
   with that ID, keeping everything else in the line the same:

   ```html
   <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...>
   ```

Do this for:
- `YOUTUBE_VIDEO_ID_HERO` — your main showreel, at the top of the page
- `YOUTUBE_VIDEO_ID_SHORT_1` through `_4` — your short-form/vertical clips
- `YOUTUBE_VIDEO_ID_LONG_1` through `_3` — your long-form videos

**To add more clips than the placeholders provided:** copy an entire
`<article class="clip ...">…</article>` block (including the opening and
closing tags) and paste it right before or after an existing one in the
same track, then update its video ID and the two text labels inside
`<span class="clip__code">` and `<span class="clip__title">`.

**To remove a clip:** delete its whole `<article class="clip ...">…</article>`
block.

## 6. Making other common changes

All content lives in `index.html`; all visual styling lives in
`style.css`. Look for the `<!-- ✏️ EDIT ME -->` comments in `index.html` —
they mark every spot you're most likely to want to change first.

**Change text (headline, bio, FAQ, testimonials, etc.):**
Open `index.html`, find the text between HTML tags, and type over it.
For example, change:
```html
<h1>Every second earns its place.</h1>
```
to your own headline. Text inside `<p>`, `<h2>`, `<summary>` and similar
tags is always safe to rewrite directly.

**Change your email/social links:**
Near the bottom of `index.html`, in the `id="contact"` section, replace
`YOUR_EMAIL@example.com` with your real email address, and replace the
`href="#"` in each social link with your real profile URL.

**Change colors:**
Open `style.css` and scroll to the very top — the `:root { ... }` block.
Each line is one color used across the whole site:
```css
--bg: #0e0e10;        /* page background */
--accent: #ff4e33;    /* the red-orange highlight color */
--text: #f2f1ed;      /* main text color */
```
Change the hex code on the right of any line and every element using that
color updates automatically.

**Change fonts:**
Near the top of `index.html`, the `<link href="https://fonts.googleapis.com/css2?family=...">`
line loads the three fonts (Archivo, Work Sans, JetBrains Mono) from
Google Fonts. To swap one, pick a new font at https://fonts.google.com,
copy its `<link>` embed code into `index.html` in place of the current
one, then update the matching `--font-display` / `--font-body` /
`--font-mono` values near the top of `style.css`.

**Add or remove a whole section:**
Each section in `index.html` is wrapped in a `<section>...</section>` tag
with a comment above it like `<!-- ============ FAQ ============ -->`.
Delete a whole `<section>` block to remove that part of the page, or copy
one as a starting point for a new section. If you remove a section, also
remove its matching link in the `<nav>` near the top of the file (a
`<a href="#faq">FAQ</a>`-style line).

**Change the stats in the hero (100+, 48h, 2):**
Find the `<div class="stats">` block near the top of `index.html` and
edit the numbers and labels inside each `<div class="stat">`.

---

Everything here is meant to be readable and editable by hand — there's no
hidden configuration or generated code. If something breaks after an
edit, it's almost always a missing closing tag (`</...>`) or a stray
quote mark near where you last typed.
