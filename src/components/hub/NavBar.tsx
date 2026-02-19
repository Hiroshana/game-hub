import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/game-hub-logo.jpg";
import ToggleForDarkLight from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={"10px"} gap={10}>
      <Link to="/">
        <Image src={logo} width="80px" borderRadius={10} objectFit="cover" />
      </Link>
      <SearchInput />
      <ToggleForDarkLight></ToggleForDarkLight>
    </HStack>
  );
};

export default NavBar;
