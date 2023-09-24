/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark1: '#091c32',
      dark2: '#293045',
      dark3: '#444d66',
      dark4: '#137Dc5',
      dark5: '#4796cc',
      dark6: '#227ebd',

      light1: '#E4E9BE',
      light2: '#F8EAD8',
      light3: '#EDDBC7',
      light4: '#E6BA95',
      light5: '#695642',
      light6: '#7a6752',
    },
    fontSize: {
      sm: '12px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },

    extend: {
      boxShadow: {
        '3xl': '0 0 10px 0 rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
