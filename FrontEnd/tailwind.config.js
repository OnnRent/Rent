/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" , flowbite.content(),],
  theme: {
    extend: {
      colors : {
        backColor:'#FF7B29',
        hoverColor:'#75C2D6',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      animation: {
        'scroll-carousel': 'scroll 30s linear infinite', // Customize timing as needed
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

