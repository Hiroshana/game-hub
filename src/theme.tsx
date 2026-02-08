// theme.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  colorMode: {
    initial: "dark", // dark mode default
    useSystem: false, // ignore OS preference
  },
});
