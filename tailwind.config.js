/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soiBlue': '#17375e',
        'soiGrey': '#222222',
        'soiGreyText': '#565353',
        'soiLightGreyText': '#a0a0a0',
        'soiRed': '#ae2128',
      },
      keyframes: {
        slideUpUnblur: {
          '0%': { transform: 'translateY(50px)', filter: 'blur(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', filter: 'blur(0)', opacity: '1' },
        },
      },
      animation: {
        slideUpUnblur: 'slideUpUnblur 1s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
  ],
}
