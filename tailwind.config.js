/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GeneralSans: ["var(--font-generalsans)"],
        GeneralSansMedium: ["var(--font-generalsans-medium)"],
      },
      colors: {
        forground: "#eef0f2",
        background: "#000000",
        textColor: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
