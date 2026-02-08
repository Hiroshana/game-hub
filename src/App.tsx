import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/hub/NavBar";
import GameGrid from "./components/hub/GameGrid";

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
        lg: "300px 1fr", // aside width + main
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {showAside && (
        <GridItem area="aside" bg="green.400">
          Aside
        </GridItem>
      )}

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
