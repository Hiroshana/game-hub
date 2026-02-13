import {
  Box,
  Grid,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import GameGrid from "./components/hub/GameGrid";
import GameHeading from "./components/hub/GameHeading";
import GenreList from "./components/hub/GenreList";
import NavBar from "./components/hub/NavBar";
import PlatformSelector from "./components/hub/PlatformSelector";
import SortSelector from "./components/hub/SortSelector";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `
      "nav"
      "main"
    `,
        lg: `
      "nav nav"
      "aside main"
    `,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "250px 1fr", // aside width + main
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
}

export default App;
