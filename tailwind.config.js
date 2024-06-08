/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
 "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Archivo", "system-ui" ],
      },
    },
  },
  plugins: [],
}

