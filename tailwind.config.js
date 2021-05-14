module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['box-transition-100','box-transition-200']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: '#9966cc',
        lightpurple: '#6657A0',
        lightpink: '#C8329E',
        darkpink: '#F44074',
        pink: '#EC407A',
        yellow: '#FB9608',
        lightyellow: '#FFB300',
        brightyellow: '#FFCA28',
        lightorange: '#FFD54F',
        orange: '#FF8F00',
        green: '#689F38',
        lightgreen: '#33CBA4',
      },
      minWidth: {
        '20': '5rem',
        '45p': '45%',
        '4/5': '80%',
       },
      maxWidth: {
        '1.5/5': '30%',
        '3.5/10': '35%',
        '3/5': '60%',
        '55p': '55%',
        '60': '15rem',
        '68': '17rem',
        '72': '18rem',
        '80': '20rem',
      },
      fontFamily: {
        pressstart: ['PressStart', 'Arial', 'sans-serif'],
        VT323: ['VT323', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        '7px-black': '7px 7px #000000',
      },
      gridTemplateColumns: {
        '11rem-1fr': 'repeat(auto-fit, minmax(11rem, 1fr))',
        '18rem-1fr': 'repeat(auto-fill, minmax(18rem, 1fr))',
      },
      spacing: {
        '5px': '5px',
        '37px': '37px',
        '530px': '530px',
        '715px': '715px',
        '1245px': '1245px',
        '1165px': '1165px',
        '1305px': '1305px',
        '-1000px': '-1000px',
        '-1130px': '-1130px',
        '-1200px': '-1200px',
        '2p': '2%',
        '5p': '5%',
        '93p': '93%',
        '97p': '97%',
        '115p': '115%',
        '150': '37.5rem',
        '192': '48rem',
        '300': '75rem',
        '320': '80rem',
        '336': '84rem',
      },
      screens: {
        'xs': '449px',
        'sm': '621px',
      },
      scale: {
        '99': '.99',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
      margin: ['active'],
      scale: ['hover','active'],
    },
  },
  plugins: [],
}
