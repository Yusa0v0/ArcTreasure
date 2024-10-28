/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',

  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'  //包含了src文件夹下所有的vue,js等等文件
  ],
  content: [],
  theme: {
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      textColor: { // [!code focus:5]
        primary: '#1D2129',
        regular: '#4E5969',
        secondary: '#86909C',
        disabled: '#C9CDD4',
      },
    },
  },
  plugins: [

  ],
}

