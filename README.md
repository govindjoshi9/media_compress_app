# Media Compressor Website

A modern, professional landing page for the Media Compressor application built with Next.js 15.

## Features

- 🎨 Modern design with glassmorphism effects
- 🌈 Animated gradients and smooth transitions
- 📱 Fully responsive design
- 🎯 Platform-aware download buttons (auto-detects Windows/Mac/Linux)
- ⚡ Built with Next.js 15 and Tailwind CSS
- 🔍 SEO optimized

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Updating Download Links

Edit the download URLs in `lib/downloads.ts`:

```typescript
export const downloads = {
  version: '0.1.0',
  releaseDate: '2026-01-02',
  windows: {
    url: 'YOUR_WINDOWS_DOWNLOAD_URL',
    size: '45 MB',
    platform: 'Windows 10/11'
  },
  // ... update other platforms
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Push your code to GitHub
2. Import the project to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## Hosting Download Files

### Option 1: GitHub Releases (Recommended)

1. Create a release in your GitHub repository
2. Upload your MSI/DMG/AppImage files as release assets
3. Copy the download URLs and update `lib/downloads.ts`

### Option 2: Cloud Storage

- **AWS S3**: Upload files and make them public
- **Google Cloud Storage**: Upload files and generate public URLs
- **Azure Blob Storage**: Upload files and configure public access

### Option 3: Vercel Blob Storage

```bash
npm install @vercel/blob
```

Upload files via Vercel dashboard and use the generated URLs.

## Project Structure

```
media-compressor-website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and design system
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── FeatureCard.tsx  # Feature card component
│   ├── DownloadButton.tsx # Smart download button
│   └── Footer.tsx       # Footer
└── lib/
    └── downloads.ts     # Download configuration
```

## Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #14b8a6;
  /* ... */
}
```

### Content

- Hero section: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Footer links: `components/Footer.tsx`

## License

MIT
