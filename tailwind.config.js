/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary1: '#ffebf0',
      primary2: '#ffc2d1',
      primary3: '#FF597B',
      primary4: '#ff8fab',
      primary5: '#fb6f92',
      primary6: '#FF8BA0',
      primary7: '#D80065',

      blue: '#458ff7',
      white1: '#ffffff',
      white2: '#ececec',
      red: 'rgba(224, 72, 82, 0.8)',

      gray1: '#d0d0d0',
      gray2: '#808080',
    },
    fontFamily: {
      Cinzel: ['Cinzel', 'serif'],
      Playfair: ['Playfair Display', 'serif'],
      Quicksand: ['Quicksand', 'serif'],
      Poppins: ['Poppins', 'serif'],
      GowunDodam: ['Gowun Dodum', 'sans-serif'],
    },
    screens: {
      mobile: '480px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [],
};
