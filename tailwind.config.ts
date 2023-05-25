import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueTwitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
} satisfies Config;
