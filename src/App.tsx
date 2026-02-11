import {
  Box,
  Grid,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/hub/NavBar";
import GameGrid from "./components/hub/GameGrid";
import GenreList from "./components/hub/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/hub/PlatformSelector";
import SortSelector from "./components/hub/SortSelector";
import GameHeading from "./components/hub/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      {showAside && (
        <GridItem area="aside" paddingX="10px">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      )}

      <GridItem area="main">
        <Box marginBottom={10} paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
        </Box>

        <HStack paddingLeft={"10px"} gap={5} marginBottom={5}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
