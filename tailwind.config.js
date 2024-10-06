/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFF0FE",
          100: "#CED2FE",
          200: "#ACB3FE",
          300: "#8A94FE",
          400: "#636EF1",
          500: "#4954CF",
          600: "#343EAD",
          700: "#222A8B",
          800: "#131A69",
          900: "#090E47",
        },
      },
      fontFamily: {
        "Vazirmatn-Thin": ["Vazirmatn-Thin"],
        "Vazirmatn-ExtraLight": ["Vazirmatn-ExtraLight"],
        "Vazirmatn-Light": ["Vazirmatn-Light"],
        "Vazirmatn-Medium": ["Vazirmatn-Medium"],
        "Vazirmatn-SemiBold": ["Vazirmatn-SemiBold"],
        "Vazirmatn-Bold": ["Vazirmatn-Bold"],
        "Vazirmatn-Black": ["Vazirmatn-Black"],
      },
    },
  },
  plugins: [],
};
