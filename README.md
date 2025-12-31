# Portfolio Resume Website

A modern, responsive portfolio and resume website built with React, TypeScript, and Vite.

## Features

- ✅ **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **PDF Resume Viewer** - Integrated PDF viewer with download functionality
- ✅ **Dynamic Content** - "See More" functionality for sections with multiple items
- ✅ **Smooth Navigation** - React Router with intelligent scrolling behavior
- ✅ **Type-Safe** - Built with TypeScript for reliability
- ✅ **Fast Performance** - Powered by Vite for lightning-fast HMR

## Tech Stack

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool & dev server
- **React Router DOM 7.1.3** - Client-side routing
- **CSS Custom Properties** - Theme system

## Project Structure

```
frontwebsite/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Route pages
│   ├── context/             # React contexts
│   ├── types/               # TypeScript definitions
│   ├── content/json/        # Data files
│   ├── styles/              # Modular CSS
│   ├── static/              # Static assets
│   └── App.tsx              # Root component
├── public/                  # Public assets
│   └── resume.pdf          # Resume PDF file
└── vite.config.ts          # Vite configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Adding Content

Content is stored in JSON files in `src/content/json/`:
- `experience.json` - Work experience
- `education.json` - Education history
- `projects.json` - Projects
- `certifications.json` - Certifications

### Updating Resume PDF

1. Place your PDF file in `public/resume.pdf`
2. Ensure the file is valid and not corrupted
3. The PDF will be served at `/resume.pdf`

### Customizing Theme

Theme colors are defined in `src/styles/variables.css`

## CSS Architecture

The project uses modular CSS for maintainability:

- `variables.css` - Theme colors & custom properties
- `base.css` - Reset, typography, utilities
- `header.css` - Navigation styles
- `sections.css` - Page sections
- `resume.css` - Resume page
- `responsive.css` - Media queries

See `src/styles/README.md` for details.

## License

All rights reserved.
