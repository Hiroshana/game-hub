import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/game-hub-logo.jpg";
import ToggleForDarkLight from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <ToggleForDarkLight></ToggleForDarkLight>
    </HStack>
  );
};

export default NavBar;
