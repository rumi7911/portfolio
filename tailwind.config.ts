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
      },
      maxWidth: {
        'content': '780px',
      },
    },
  },
  plugins: [],
};

export default config;
