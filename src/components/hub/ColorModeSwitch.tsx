"use client";

import { IconButton } from "@chakra-ui/react";
import { Sun, Moon } from "lucide-react";
import { useColorMode } from "../ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      variant="ghost"
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </IconButton>
  );
};

export default ColorModeSwitch;
