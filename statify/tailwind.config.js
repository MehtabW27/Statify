/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '968px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'pearmint': '#4b917d',
        'brightpink': '#f037a5',
        'weirdgreen': '#cdf564',
        'white': '#ffffff',
        'black': '#000000',
        'spotifygreen': '#1DB954',
        'spotifywhite': '#FFFFFF',
        'spotifyblack': '#191414'
      }
    },
  },
  plugins: [],
}
