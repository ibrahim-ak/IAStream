/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/page/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
      },
      fontSize: {
        xl_sm: '10px',
        l_sm: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
      },
      colors: {
        bgBlack: "#0F0E0D",
        hoverBlack: "#3F3C37",
        faqBlack: "#272522",
        borderBlack: "#47443E",
      }
    },
  },
  plugins: [],
}

