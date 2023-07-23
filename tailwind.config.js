/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   mode: "jit",
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Inter", "sans-serif"],
//       },
//       colors: {
//         "black-100": "#2B2C35",
//         "primary-blue": {
//           DEFAULT: "#2B59FF",
//           100: "#F5F8FF",
//         },
//         "secondary-orange": "#f79761",
//         "light-white": {
//           DEFAULT: "rgba(59,60,152,0.03)",
//           100: "rgba(59,60,152,0.02)",
//         },
//         grey: "#747A88",
//       },
//       backgroundImage: {
//         'pattern': "url('/pattern.png')",
//         'hero-bg': "url('/hero-bg.png')"
//       }
//     },

//   },
//   plugins: [ require('@tailwindcss/aspect-ratio')],
// };