/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#063574',
        secondary: '#24A3C6',
        darkText: '#011430',
        lightText: '#01143080',
        accentText: '#011430BF',
        background: '#F2F4F6',
      },
      fontWeight: {
        "black": "900",
      },
      backgroundImage: {
        'line-mountains-peak': "url('@/assets/images/line-mountains-peak.svg')",
        'line-mountains-horizon': "url('@/assets/images/line-mountains-horizon.svg')",
      }
    },
  },
  plugins: []
}
