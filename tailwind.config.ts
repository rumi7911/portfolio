import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: '#f4efe4',
        ink: '#141210',
        muted: '#6b6b6b',
        accent: '#0f9d58',
        surface: 'var(--surface)',
        border: 'var(--border)',
        link: 'var(--link)',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(0, 0, 0, 0.25)',
      },
      maxWidth: {
        content: '920px',
      },
    },
  },
  plugins: [],
};

export default config;
