# PeakHeight Landing Page - Next.js with Animated Typography

A stunning Next.js landing page with **crazy animated typography effects** including glitch, gradient, letter reveal, split, shimmer, magnetic, and wave animations.

## 🚀 Features

- **Animated Typography**: Multiple animation variants:
  - ✨ Glitch effects with color distortion
  - 🌈 Gradient animations
  - 📝 Letter-by-letter reveals
  - 💥 Split text (characters fly in from sides)
  - ✨ Shimmer/shine effects
  - 🧲 Magnetic text (follows mouse)
  - 🌊 Wave animations

- **Next.js 14** with App Router
- **Framer Motion** for smooth animations
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **shadcn/ui** components

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Copy assets from `src/assets` to `public/assets`:
```bash
# On Windows PowerShell
if (Test-Path "src\assets") { 
  New-Item -ItemType Directory -Force -Path "public\assets" | Out-Null
  Copy-Item -Path "src\assets\*" -Destination "public\assets\" -Recurse -Force 
}
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

Following the PeakHeight app design system:
- **Typography**: Inter for UI text, Playfair Display for headlines
- **Colors**: Black/white theme (onboarding style)
- **Spacing**: Consistent spacing system
- **Animations**: Smooth transitions and effects

## 📝 Key Dependencies

- `next`: Next.js framework
- `framer-motion`: Animation library
- `lucide-react`: Icons
- `@radix-ui/*`: UI primitives
- `tailwindcss`: Styling
- `class-variance-authority`: Component variants
- `clsx` & `tailwind-merge`: Class utilities

## 🎯 Animation Variants

Use the `AnimatedText` component with different variants:

```tsx
<AnimatedText text="Hello World" variant="glitch" />
<AnimatedText text="Hello World" variant="gradient" />
<AnimatedText text="Hello World" variant="reveal" />
<AnimatedText text="Hello World" variant="split" />
<AnimatedText text="Hello World" variant="shimmer" />
<AnimatedText text="Hello World" variant="magnetic" />
<AnimatedText text="Hello World" variant="wave" />
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── animated-text/    # Animated text components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts          # Utility functions
└── public/
    └── assets/           # Static assets
```

## 🔧 Build

```bash
npm run build
npm start
```

## 📄 License

© 2025 PeakHeight. All rights reserved.
