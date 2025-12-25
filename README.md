# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, premium UI/UX design
- 🌓 Dark/Light mode toggle
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized performance with Next.js App Router
- 🎯 SEO-friendly metadata
- 🔒 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about.tsx
│   ├── certificates.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   └── theme-provider.tsx
├── public/
└── ...
```

## Customization

Update the following files with your personal information:

- `components/hero.tsx` - Hero section content
- `components/about.tsx` - About section
- `components/skills.tsx` - Skills and technologies
- `components/projects.tsx` - Project details
- `components/experience.tsx` - Work experience and education
- `components/certificates.tsx` - Certificates and achievements
- `components/contact.tsx` - Contact information and form

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

