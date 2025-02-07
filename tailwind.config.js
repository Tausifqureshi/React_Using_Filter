  // /** @type {import('tailwindcss').Config} */
  // export default {
  //   content: [
  //     "./index.html",
  //     "./src/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   theme: {
  //     extend: {},
  //   },
  //   // plugins: [require('tailwind-scrollbar')],
  
  //   // variants: {
  //   //   scrollbar: ['rounded'], // Enables rounded scrollbars
  //   // },
  // }

  
  // tailwind.config.js        
 export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust this to your file structure
  theme: {
    extend: {
      mixBlendMode: {
        normal: 'normal',
        multiply: 'multiply',
        screen: 'screen',
        overlay: 'overlay',
        darken: 'darken',
        lighten: 'lighten',
        colorDodge: 'color-dodge',
        colorBurn: 'color-burn',
        hardLight: 'hard-light',
        softLight: 'soft-light',
        difference: 'difference',
        exclusion: 'exclusion',
        hue: 'hue',
        saturation: 'saturation',
        color: 'color',
        luminosity: 'luminosity',
      },
      // gridTemplateColumns: {
      //   custom: "repeat(4, minmax(0, 350px))",
      // },
    },
  },
  plugins: [],
};
