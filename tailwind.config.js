/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // ini penting agar Tailwind tahu harus cari class di mana
  theme: {
    extend: {
      colors: {
        accent: '#46A358',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
