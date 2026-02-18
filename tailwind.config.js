/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bddbff",
          300: "#90c4ff",
          400: "#5ca3ff",
          500: "#2d7dff",
          600: "#175de6",
          700: "#164bb8",
          800: "#193f91",
          900: "#1a3872",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Manrope", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        premium:
          "0 10px 30px -12px rgba(8, 47, 130, 0.38), 0 4px 12px -4px rgba(15, 23, 42, 0.5)",
      },
      backgroundImage: {
        "mesh-pattern":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.15), transparent 35%), radial-gradient(circle at 85% 90%, rgba(96,165,250,0.2), transparent 40%)",
      },
    },
  },
  plugins: [],
};
