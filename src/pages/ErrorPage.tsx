import NavBar from "@/components/hub/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5}>
        <NavBar />
        <Box padding={2}>
          <Heading>Oops!!!</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "This page does not exist"
              : "An unexpected error occurred."}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
