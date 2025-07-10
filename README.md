# Jan de Jong Martial Arts School Website

An Astro-based website for Jan de Jong Martial Arts School, featuring information about various martial arts classes, training programs, and membership options.

## Tech Stack

- **Framework**: Astro 4.0
- **Styling**: Tailwind CSS 3.4
- **Node Version**: 20.x LTS recommended

## Features

- Multiple martial arts program pages (Aikido, Ju-Jutsu, Tai Chi, etc.)
- Class timetables and membership information
- Corporate and personal training options
- Image galleries for various programs
- Contact and trial class forms

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/jandejong.com.au.git
cd jandejong.com.au
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Railway. Simply connect your GitHub repository to Railway and it will automatically deploy on push to the main branch.

## Project Structure

```
/
├── public/          # Static assets (images)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages
│   └── styles/      # Global styles
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## License

All rights reserved. This website and its content are proprietary to Jan de Jong Martial Arts School.