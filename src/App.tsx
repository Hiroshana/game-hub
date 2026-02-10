import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/hub/NavBar";
import GameGrid from "./components/hub/GameGrid";
import GenreList from "./components/hub/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/hub/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      )}

      <GridItem area="main">
        <HStack paddingLeft={"10px"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </HStack>

        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
