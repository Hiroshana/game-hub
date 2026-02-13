import GameGrid from "@/components/hub/GameGrid";
import GameHeading from "@/components/hub/GameHeading";
import GenreList from "@/components/hub/GenreList";
import PlatformSelector from "@/components/hub/PlatformSelector";
import SortSelector from "@/components/hub/SortSelector";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const HomePage = () => {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `
      "main"
    `,
        lg: `
      "aside main"
    `,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "250px 1fr", // aside width + main
      }}
    >
      {showAside && (
        <GridItem area="aside" paddingX="10px">
          <GenreList />
        </GridItem>
      )}

      <GridItem area="main">
        <Box marginBottom={10} paddingLeft={2}>
          <GameHeading />
        </Box>

        <HStack paddingLeft={"10px"} gap={5} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
