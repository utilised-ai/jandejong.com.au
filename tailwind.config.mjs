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
  plugins: [],
}