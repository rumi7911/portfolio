<div align="center">

# Muhammad Sohaib Roomi — Portfolio

A minimal, text-first personal portfolio and blog built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

[Live Demo](https://yourdomain.com) · [GitHub](https://github.com/rumi7911/portfolio)

<!-- Replace with a screenshot once deployed -->
<!-- ![Portfolio Screenshot](./public/headshot.jpg) -->

</div>

## About

This is my personal branding site. It showcases my work as the founder of [Cognumi](https://www.cognumi.co.uk/), my agentic AI workflow work through [agentalent.ai](https://agentalent.ai/builders/ce3b41ea-2b9f-40fc-aa57-36f6ebebc6a9), and my writing on AI operations and automation.

The design is inspired by clean, typography-driven portfolios like [conordewey.com](https://www.conordewey.com).

## Features

- ⚡ **Next.js 15 App Router** with static export
- 🎨 **Tailwind CSS** with light/dark theme toggle
- 📝 **Markdown blog** support
- 🖼️ **Polaroid-style headshot** frame on the homepage
- 📱 **Responsive** single-column layout
- 🔍 **SEO-ready** with Open Graph and meta tags

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [gray-matter](https://github.com/jonschlinkert/gray-matter)
- [remark](https://github.com/remarkjs/remark)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/rumi7911/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Build

```bash
npm run build
```

The static export will be generated in the `dist/` directory.

## Deployment

### Vercel (recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push this repo to GitHub
2. Import it on Vercel
3. Deploy

### GitHub Pages

1. Update `next.config.js` to set the correct `basePath` for your repo name
2. Push the `dist/` output to a `gh-pages` branch, or use GitHub Actions

## Project Structure

```
portfolio/
├── app/                  # Next.js app router pages
├── components/           # Shared React components
├── content/              # Project data and blog posts
├── lib/                  # Markdown parsing helpers
├── public/               # Static assets (headshot, favicon)
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Customization

- **Projects:** edit `content/projects.ts`
- **Blog posts:** add/edit `content/posts/*.md`
- **Social links:** edit `components/SocialLinks.tsx`
- **Colors/fonts:** edit `tailwind.config.ts` and `app/globals.css`

## Author

**Muhammad Sohaib Roomi**

- [LinkedIn](https://www.linkedin.com/in/muhammad-sohaib-roomi/)
- [X / Twitter](https://x.com/Sohaibroomiii)
- [Email](mailto:sohaib.7911@gmail.com)

---

<div align="center">

Built with intention. Minimal by design.

</div>
