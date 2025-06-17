// tailwind.config.js
module.exports = {
  content: ["index.html"], //./src/**/*.{html,js,jsx,ts,tsx}
  theme: {
    container: {
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screen: {
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}
