import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/hub/NavBar";
import GameGrid from "./components/hub/GameGrid";
import GenreList from "./components/hub/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      )}

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
