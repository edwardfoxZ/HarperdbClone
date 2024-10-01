/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(0,0,0,0.5466561624649859) 0%, rgba(110,193,162,1) 0%, rgba(74,177,213,1) 75%)",
        "custom-gardient-button-main":
          "linear-gradient(90deg, rgba(48,194,252,1) 0%, rgba(71,104,237,1) 100%)",
      },
    },
  },
  plugins: [],
};
