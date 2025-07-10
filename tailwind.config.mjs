/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#BA0000',
        'primary-hover': '#A00000',
        secondary: '#000000',
        background: '#FFFFFF',
        text: '#1A1A1A',
        accent: '#F5F5F5',
      },
      fontFamily: {
        heading: ['Impact', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
      },
      spacing: {
        section: '60px',
        element: '20px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        jandejong: {
          "primary": "#BA0000",
          "primary-content": "#FFFFFF",
          "secondary": "#000000",
          "secondary-content": "#FFFFFF",
          "accent": "#F5F5F5",
          "accent-content": "#1A1A1A",
          "neutral": "#1A1A1A",
          "neutral-content": "#FFFFFF",
          "base-100": "#FFFFFF",
          "base-200": "#F5F5F5",
          "base-300": "#E5E5E5",
          "base-content": "#1A1A1A",
          "info": "#0891b2",
          "info-content": "#FFFFFF",
          "success": "#16a34a",
          "success-content": "#FFFFFF",
          "warning": "#eab308",
          "warning-content": "#FFFFFF",
          "error": "#dc2626",
          "error-content": "#FFFFFF",
        },
      },
    ],
  },
}