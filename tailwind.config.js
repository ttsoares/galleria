/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", "0.938rem"],
      sm: ["0.813rem", "1.063rem"],
      base: ["0.875rem", "1.75rem"],
      lg: ["0.938rem", "1.813rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.313rem", "1.375rem"],
      "3xl": ["1.5rem", "1.813rem"],
      "4xl": ["3.5rem", "4rem"],
      "5xl": ["12.5rem", "9.375rem"],
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
