/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          Blue: "hsl(223, 87%, 63%)",
        },
        Secondary: {
          PaleBlue: "hsl(223, 100%, 88%)",
          LightRed: "hsl(354, 100%, 66%)",
        },
        Neutral: {
          Gray: "hsl(0, 0%, 59%)",
          VeryDarkBlue: "hsl(209, 33%, 12%)",
        },
      },
    },
  },
  plugins: [],
};
