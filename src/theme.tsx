// theme.ts

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          // 50: { value: "#e6f2ff" },
          // 100: { value: "#e6f2ff" },
          // 200: { value: "#bfdeff" },
          // 300: { value: "#99caff" },
          // // ...
          // 950: { value: "#001a33" },
          50: { value: "#eaf2ff" }, // very light background
          100: { value: "#d6e4ff" },
          200: { value: "#adc8ff" },
          300: { value: "#84a9ff" },
          400: { value: "#6690ff" },
          500: { value: "#3366ff" }, // PRIMARY
          600: { value: "#254eda" },
          700: { value: "#1939b7" },
          800: { value: "#102693" },
          900: { value: "#091a7a" },
          950: { value: "#030852" }, // dark mode / accents
        },

        gray: {
          50: { value: "#f7f8fa" },
          100: { value: "#e4e7ec" },
          200: { value: "#cfd4dc" },
          300: { value: "#b7bdc8" },
          400: { value: "#9da3b0" },
          500: { value: "#82889a" },
          600: { value: "#63697b" },
          700: { value: "#44495a" },
          800: { value: "#2b2f3a" },
          900: { value: "#1a1d26" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
