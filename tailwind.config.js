/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#1C4DBE',
          900: '#0D2566',
        },
        yellow: {
          900: '#5F4B3B',
        },
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateX(75%)' },
        },
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
        'custom-bounce': 'custom-bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
