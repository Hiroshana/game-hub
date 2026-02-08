import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

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
      <GridItem area="nav" bg="blue.400">
        Nav
      </GridItem>

      {showAside && (
        <GridItem area="aside" bg="green.400">
          Aside
        </GridItem>
      )}

      <GridItem area="main" bg="gray.200">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
