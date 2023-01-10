/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary1: '#EFD0CA',
      primary2: 'rgb(224,142,156)',
      primary3: '#FF597B',
      primary4: '#F56EB3',
      primary5: '#EA047E',

      blue: '#458ff7',
      white1: '#ffffff',
      white2: '#ececec',
      gray1: '#d0d0d0',

      myDarkBlue: '#041627',

      myGray: '#eff2f5',
      myLightGray: '#f0f0f0',
      myBeigeGray: '#f5f5f5',
      myLightBlack: '#2a2a2a',
      myBeige: '#fafafa'
    },
    fontFamily: {
      Cinzel: ['Cinzel', 'serif']
    },
    screens: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1024px'
    }
  },
  plugins: []
};
