import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 20% 0%, rgba(109,40,217,0.35), transparent 60%), radial-gradient(1200px 600px at 80% 0%, rgba(37,99,235,0.35), transparent 60%)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
