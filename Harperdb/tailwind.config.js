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
        "latency-div-bg":
          "linear-gradient(180deg, rgba(117,197,154,1) 0%, rgba(96,187,183,1) 49%, rgba(68,173,221,1) 100%)",
        "savings-div-bg":
          "linear-gradient(180deg, rgba(167,61,151,1) 5%, rgba(63,79,160,1) 100%)",
        "button-yt-bg":
          "linear-gradient(90deg, rgba(45,204,253,1) 0%, rgba(72,103,237,1) 61%)",
      },
    },
  },
  plugins: [],
};
