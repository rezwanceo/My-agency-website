/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0F172A',
        surfaceDark: '#0B1220',
        surfaceLight: '#1A2638',
        primary: '#0FB1A6',
        accent: '#FFB020',
        muted: '#94A3B8',
        card: 'rgba(255, 255, 255, 0.08)',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-glass': 'radial-gradient(circle at top left, rgba(15, 177, 166, 0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(255, 176, 32, 0.16), transparent 22%)',
        'section-glass': 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      },
      borderRadius: {
        xl: '1.5rem',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
