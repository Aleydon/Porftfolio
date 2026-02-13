# Portfolio App — Roberto Aleydon

Mobile-first portfolio layout built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Stack

| Tool         | Version | Purpose                     |
| ------------ | ------- | --------------------------- |
| Next.js      | 15      | Framework (App Router)      |
| TypeScript   | 4.x     | Type safety                 |
| Tailwind CSS | 4.x     | Styling via `@theme` tokens |
| React        | 19      | UI rendering                |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 @theme tokens + animations
│   ├── layout.tsx           # Root layout (Header + Footer + fonts)
│   └── page.tsx             # Home page (section composition)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky header + hamburger nav drawer
│   │   └── Footer.tsx       # Social links + copyright
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx         # Avatar, title, bio, CTA
│   │   ├── RecentPostsSection.tsx  # Blog post cards list
│   │   └── FeaturedWorksSection.tsx # Project cards
│   │
│   └── ui/
│       ├── Button.tsx        # Polymorphic button (<button> or <a>)
│       ├── PostCard.tsx      # Blog post card
│       ├── ProjectCard.tsx   # Portfolio project card
│       ├── SectionLabel.tsx  # Section eyebrow label
│       ├── Tag.tsx           # Pill badge
│       └── icons/            # SVG icon components
│
├── lib/
│   ├── data.ts              # Static content (posts, projects, links)
│   └── utils.ts             # cn() and helper functions
│
└── types/
    └── index.ts             # TypeScript interfaces
```

---

## Design Tokens (Tailwind v4 `@theme`)

```css
--font-sans: 'DM Sans' --font-display: 'Fraunces' (headings, italic accents)
  --color-brand-coral: #ff5e5b (CTA, accents) --color-brand-navy: #1a1f3a
  (primary text) --color-brand-indigo: #3d4a8a (secondary, tags);
```

---

## Replacing Placeholder Images

1. Drop your avatar at `public/images/avatar.jpg`
2. Drop project screenshots at `public/images/dashboard-preview.jpg`
3. Update paths in `src/lib/data.ts`

---

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```
