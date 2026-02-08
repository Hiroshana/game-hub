import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/useGames";
import { HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    iso: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];

        if (!IconComponent) return null;

        return (
          <IconComponent
            key={platform.slug}
            size={18}
            aria-label={platform.name}
            color="var(--chakra-colors-gray-500)"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
