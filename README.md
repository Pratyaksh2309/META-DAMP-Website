# MEMS D-AMP Blog

A modern, comprehensive blog platform for MEMS students at IIT Bombay, featuring course reviews, internship experiences, academic guidance, and resources with a beautiful glassmorphism design.

## ✨ Features

- **🎨 Modern Glassmorphism UI**: Beautiful glass-effect cards with smooth animations
- **📱 Fully Responsive**: Mobile-first design optimized for all devices
- **🔍 Smart Search**: Client-side search powered by Fuse.js
- **⚡ Fast Navigation**: Single Page Application with React Router
- **🎯 Comprehensive Content**: Course reviews, internship experiences, academic tracks
- **🌟 Interactive Elements**: Hover effects, animations, and smooth transitions
- **🔎 SEO Optimized**: Full SEO implementation with sitemap, robots.txt, and structured data

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **React Router DOM** - Client-side routing
- **Fuse.js** - Fuzzy search functionality
- **Liquid Glass React** - Glassmorphism components

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd MEMS-D-AMP-Blogs

# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
MEMS-D-AMP-Blogs/
├── public/
│   ├── Final DAMP logo (With text).png
│   └── Final DAMP logo (Without text).png
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Main layout wrapper
│   │   ├── Navigation.jsx    # Navigation component
│   │   ├── Footer.jsx        # Footer component
│   │   └── SearchBar.jsx     # Search functionality
│   ├── contexts/             # React contexts (if any)
│   ├── pages/
│   │   ├── Home.jsx          # Homepage with hero section
│   │   ├── Courses.jsx       # Course reviews listing
│   │   ├── CourseReview.jsx  # Individual course review
│   │   ├── Experiences.jsx   # Experiences listing
│   │   ├── ExperienceDetail.jsx # Individual experience
│   │   ├── Tracks.jsx        # Course tracks listing
│   │   ├── TrackDetail.jsx   # Individual track details
│   │   ├── Events.jsx        # Events listing
│   │   ├── EventDetail.jsx   # Individual event details
│   │   ├── Team.jsx          # Team page
│   │   └── Support.jsx       # Support and FAQ
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js        # Custom design system
└── postcss.config.js
```

## 🎨 Design System

The project features a custom design system with:

### Color Palette
- **Primary Blue**: `primary-blue-500` (#3b82f6) with full 50-950 scale
- **Accent Yellow**: `accent-yellow-500` (#eab308) with full 50-950 scale  
- **Neutral Grays**: `neutral-500` (#64748b) with full 50-950 scale
- **Glassmorphism Effects**: Semi-transparent backgrounds with backdrop blur

### Typography
- **Primary**: Inter font family
- **Secondary**: Lato font family

### Animations
- Floating animations for background elements
- Stagger animations for content reveal
- Hover effects with scale and glow transitions
- Gradient text effects

## 🚀 Deployment

### Netlify (Recommended)
This project is fully configured for Netlify deployment with SEO optimization.

**Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` included with optimized settings
- Automatic sitemap generation via @netlify/plugin-sitemap
- Security headers and caching configured

**Deploy Steps:**
1. Push to GitHub
2. Connect repository to Netlify
3. Netlify auto-detects configuration from `netlify.toml`
4. After deployment, submit sitemap to search engines (see SEO-GUIDE.md)

### Vercel
```bash
# Push to GitHub and connect to Vercel
# Vercel auto-detects Vite configuration
```

### Manual Build
```bash
npm run build
# Outputs to dist/ directory
```

## 🔎 SEO Features

This project includes comprehensive SEO optimization:

- ✅ **netlify.toml** - Netlify configuration with security headers and caching
- ✅ **robots.txt** - Search engine crawler directives
- ✅ **sitemap.xml** - Automatic sitemap generation
- ✅ **Structured Data** - Schema.org JSON-LD for better search engine understanding
- ✅ **Meta Tags** - Complete Open Graph and Twitter Card meta tags
- ✅ **Canonical URLs** - Proper canonical URL management
- ✅ **Performance** - Optimized for Core Web Vitals

📖 **See [SEO-GUIDE.md](SEO-GUIDE.md) for detailed SEO implementation and post-deployment tasks.**

## 📝 Content Management

Content is managed through component data arrays:

- **Courses**: Edit data in `src/pages/Courses.jsx`
- **Experiences**: Edit data in `src/pages/Experiences.jsx`  
- **Tracks**: Edit data in `src/pages/Tracks.jsx`
- **Events**: Edit data in `src/pages/Events.jsx`
- **Team**: Edit data in `src/pages/Team.jsx`

## 🔧 Development

### Available Scripts
- `npm run dev` - Development server (port 3000)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run serve` - Alias for preview

### Key Features
- **Hot Module Replacement** via Vite
- **Client-side Routing** with React Router DOM v7
- **Fuzzy Search** with Fuse.js
- **Glassmorphism UI** with Liquid Glass components
- **Custom Animations** and transitions

## 📞 Support

- **Email**: damp.mems@iitb.ac.in
- **Team Page**: Visit `/team` for individual contacts
- **Support Page**: Visit `/support` for FAQs

## 📄 License

MIT License

---

**Built with ❤️ for MEMS students at IIT Bombay**