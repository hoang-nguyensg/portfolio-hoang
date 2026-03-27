# Nguyen Huy Hoang — Portfolio Website

Personal portfolio website for Nguyen Huy Hoang, Junior AI Engineer.

**Built with:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes

---

## 🚀 Local Development

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🔧 Before Publishing

1. **LinkedIn URL** — Search `[LINKEDIN_URL]` and replace with your actual URL in:
   - `src/components/layout/Footer.tsx`
   - `src/components/sections/ContactCTA.tsx`
   - `src/app/contact/page.tsx`

2. **GitHub URL** — Search `[GITHUB_URL]` and replace:
   - `src/components/layout/Footer.tsx`
   - `src/app/contact/page.tsx`

3. **Resume PDF** — Replace `public/resume.pdf` with your actual resume file.

4. **Domain** — Update `metadataBase` in `src/app/layout.tsx` and the base URL in `src/app/sitemap.ts`.

5. **Project links** — Update placeholder links in `src/data/projects.ts`.

---

## 🏗 Build

```bash
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Run production server locally
```

---

## ☁️ Deploy

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — it auto-detects Next.js.

### Other Platforms

- **Netlify**: Works with Next.js adapter
- **Static export**: Add `output: 'export'` to `next.config.ts` if deploying to GitHub Pages (note: some dynamic features won't work)

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Home page
│   ├── projects/         # Projects listing + [slug] detail
│   ├── experience/       # Experience timeline
│   ├── contact/          # Contact form
│   ├── blog/             # Blog placeholder
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # robots.txt
├── components/
│   ├── layout/           # Navbar, Footer, ThemeProvider
│   ├── ui/               # Button, Card, Badge, AnimateIn, etc.
│   └── sections/         # Home page sections
├── data/                 # Typed content (projects, experience, skills, education)
└── lib/                  # Utility functions
public/
├── resume.pdf            # ← REPLACE with your real resume
└── og-image.png          # OpenGraph image
```
