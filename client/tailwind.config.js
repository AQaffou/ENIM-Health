/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Mulish"],
        body: ["Inter"],
      },
      colors: {
        "logo-text": "hsl(215, 35%, 21%)",
        "light-grey": "#7D7987",
        "blue-button": "#458FF6",
      },
    },
  },
  plugins: [],
};
