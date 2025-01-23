/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: '#59479C',
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#59479C',
        background: '#ffffff',
        foreground: '#0f172a',
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
}
