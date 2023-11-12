/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "15px"],
      sm: ["13px", "17px"],
      base: ["14px", "28px"],
      lg: ["15px", "29px"],
      xl: ["20px", "28px"],
      "2xl": ["18px", "22px"],
      "3xl": ["24px", "29px"],
      "4xl": ["56px", "64px"],
      "5xl": ["200px", "150px"],
    },
    extend: {
      colors: {
        dark: "#7D7D7D",
        medium: "#E5E5E5",
        light: "#F3F3F3",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
