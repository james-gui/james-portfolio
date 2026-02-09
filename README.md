# James Portfolio

A stunning personal portfolio website built with Next.js, Three.js, and Framer Motion. Features 3D animations, glassmorphism design, and cyberpunk aesthetics.

![Portfolio Preview](./public/preview.png)

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Three.js + React Three Fiber** - 3D graphics and WebGL
- **React Icons** - Icon library

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern frosted glass UI elements
- 🌊 **3D Animations** - Floating geometric shapes with Three.js
- 🎭 **Cyberpunk Aesthetic** - Neon accents and subtle glows
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎬 **Scroll Animations** - Smooth transitions as you scroll
- ⌨️ **Typing Effect** - Animated text in hero section
- 🎯 **Interactive Elements** - Hover effects and micro-interactions

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/james-gui/james-portfolio.git
cd james-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
james-portfolio/
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and Tailwind
├── components/
│   ├── Hero.tsx          # Hero section with 3D element
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Experience.tsx    # Experience timeline
│   ├── Skills.tsx        # Skills grid
│   ├── Contact.tsx       # Contact form
│   ├── FloatingGeometry.tsx  # 3D Three.js component
│   ├── BackgroundGradient.tsx # Animated background
│   └── ScrollProgress.tsx     # Scroll progress bar
├── lib/
│   └── data.ts           # Portfolio data
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
└── next.config.ts        # Next.js configuration
```

## 🎨 Customization

### Personal Information

Edit `lib/data.ts` to update:
- Personal details
- Projects
- Experience
- Education
- Skills

### Styling

- **Colors**: Edit `tailwind.config.ts` - look for `cyber` colors
- **Animations**: Modify components or `globals.css`
- **3D Elements**: Edit `components/FloatingGeometry.tsx`

### Sections

Each section is a separate component in `components/`:
- Remove sections by deleting imports from `app/page.tsx`
- Add new sections by creating components and importing them

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The static export is configured in `next.config.ts`:
```bash
npm run build
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Built by Jeffrey (AI Assistant) for James
