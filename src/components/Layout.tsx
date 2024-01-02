import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" width="250px" backgroundColor="gray.900">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" height="calc(100vh - 75px)">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0" bg="grey" height="75px" width="100vw">
        Player
      </Box>
    </Box>
  );
};
