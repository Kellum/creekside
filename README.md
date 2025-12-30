# Creekside RV Park Website

A modern, minimal website for Creekside RV Park built with Astro and Sanity CMS.

## 🌟 Features

- **Modern & Minimal Design**: Clean UI/UX with generous white space and consistent spacing
- **Fully Manageable**: Client can edit all text and images through Sanity CMS
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Responsive**: Works beautifully on all devices
- **SEO Optimized**: Built-in SEO best practices
- **No Cookie-Cutter WordPress**: Custom-built, not a theme

## 🎨 Design System

The website follows a refined design system documented at `/branding`:
- **Primary Color**: Blue (#2563EB) - used strategically
- **Neutrals**: White/gray backgrounds (80% of design)
- **Accent Colors**: Green and Sand for variety
- **Spacing**: 8px grid system for consistency
- **No wave separators or gimmicks**: Clean, modern aesthetic

## 📁 Project Structure

```
creekside-site/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── lib/            # Utilities and Sanity client
│   ├── pages/          # Website pages
│   └── styles/         # Custom theme
├── sanity-studio/      # Sanity CMS Studio
│   ├── schemas/        # Content schemas
│   └── sanity.config.ts
└── public/            # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Sanity account (free tier available)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Sanity project details (see SANITY_SETUP.md)

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321

## 📝 Content Management with Sanity

The client can manage all content (text and images) through Sanity CMS. No code editing required!

To set up Sanity, you'll need to:
1. Create a free Sanity account
2. Create a new project
3. Update environment variables with your project ID
4. Run Sanity Studio locally or deploy it

## 🎨 Viewing the Branding Guide

Visit `/branding` on your local or live site to view the complete style guide with:
- Color palette with hex codes
- Typography scale
- Spacing system
- Component examples
- Best practices

## 📦 Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚢 Deployment to Railway

1. Create a new Railway project
2. Connect your GitHub repository
3. Configure build settings:
   - Build Command: `npm run build`
   - Start Command: Static file server or `npm run preview`
4. Set environment variables in Railway dashboard
5. Deploy!

## 📄 Pages

- **Home** (`/`) - Hero, features, amenities preview, contact form
- **About** (`/about`) - Park information and FAQs
- **Accommodations** (`/accommodations`) - RV sites, storage, Airstreams
- **Amenities** (`/amenities`) - Full list of park amenities
- **Things to Do** (`/things-to-do`) - Nearby attractions
- **Rates** (`/rates`) - Pricing, policies, and rules
- **Contact** (`/contact`) - Contact form and directions
- **Branding** (`/branding`) - Design system documentation

## 🛠️ Available Scripts

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build |

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 License

Copyright © 2025 Creekside RV Park. All rights reserved.
