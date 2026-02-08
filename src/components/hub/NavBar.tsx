import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/game-hub-logo.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="80px" p="10px" />
      <Text>Game Hub</Text>
    </HStack>
  );
};

export default NavBar;
