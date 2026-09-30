import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1bff11',
          foreground: '#051002',
          hover: '#16e00f',
          muted: 'rgba(27, 255, 17, 0.1)',
        },
        surface: '#0a0a0a',
        'surface-elevated': '#121212',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};

export default config;