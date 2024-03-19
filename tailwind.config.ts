import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          "gray-100":"#FAF9F8",
          "primary-100":"#FDFDFC",
          "Primary-200":"#CDCBC9",
      },
      
      backgroundImage: {
        "gradient-btn": "linear-gradient(94deg, #42A9F4 22.48%, #3BD6E0 77.53%)",
        "gradient-home": "linear-gradient(90deg, #53B7FF 70%, #39E8DD 100%)",
      },
      content: {
        yellowEllipse: "url('./assets/yellowHalfFull.svg')",
        yellowFull: "url('./assets/yellowFull.svg')",
        yellowHalfFull: "url('./assets/yellowHalfFull.svg')",
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",

      }
    },
    screens: {
      xxs: "340px",
      xs: "480px",
      sm: "768px",
      md:"1060px"
    }
  },
  plugins: [],
};
export default config;
