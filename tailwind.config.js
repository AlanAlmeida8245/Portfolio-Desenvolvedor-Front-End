/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      "pq": '430px',

        // => @media (min-width: 330px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'background': "url('./assets/background.jpg)"
      },
       fontFamily: {
      'max-impact': ['Maximum', 'Helvetica', 'Arial', 'sans-serif'],
      'kinect': ['Kinect', 'Helvetica', 'Arial', 'sans-serif'],
      'SinkSans': ['SinkSans', 'Helvetica', 'Arial', 'sans-serif']
    },
    spacing: {
      '128': '32rem',
      'Max': '50rem'
    },
      colors:{
          'gold': '#E0A04D',
          'fosco': '#292929'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

