/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jeju: ['"Jeju Gothic"', 'sans-serif'], // Adding Jeju Gothic font
        jaldi: ['"Jaldi"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
