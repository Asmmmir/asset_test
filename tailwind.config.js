/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    fontFamily:{ 
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#FD6F00'
      },
      fontSize: {
        'title': '65px'
      }
    }
  },
  plugins: [
  ],
};
