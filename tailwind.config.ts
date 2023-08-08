/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'abril' : ['"Abril Fatface"','arial'],
        'roboto' : ['"Roboto"','arial'],
        'quicksand' : ['"Quicksand"', 'arial']
      },
      colors: {
        'dark-purple' : '#2A1B3B',
        'maroon' : '#553D67',
        'pink' : '#F64C72',
        'grey' : '#99738E',
        'semi-dark-blue' : '#2F2FA2',

        'green' : '#0EAD69',
        'darkgreen' : '#11671D',
        'beige' : '#fffaf2',
        'dark': '#231F20',
        'desertred' : '#f19410',
      }
    },
  },
  plugins: [],
}
