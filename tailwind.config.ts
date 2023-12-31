import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    ".app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      5: "5px",
      8: "8px",
      16: "16px",
      30: "30px",
      full: "100%",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        right: "10px 0px 20px rgba(255, 255, 255, 0.7)",
      },
      colors: {
        darkBlue: "#032541",
        darkGrey: "#757575 ",
        purple: " #805BE7",
        lightBlue: "#01B4E4",
        lightBrown: "#897474",
        grey: "#D7D7D7",
        lightGrey: "#E4E4E4",
        lightGreen: "#1ED5A9",
      },
    },
  },
  plugins: [],
};
export default config;
