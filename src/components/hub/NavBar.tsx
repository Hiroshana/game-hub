import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/game-hub-logo.jpg";
import ToggleForDarkLight from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"} gap={10}>
      <Image src={logo} boxSize="60px" borderRadius={10} />
      <SearchInput />
      <ToggleForDarkLight></ToggleForDarkLight>
    </HStack>
  );
};

export default NavBar;
