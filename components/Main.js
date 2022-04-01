import { Box } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

const Main = ({ children }) => (
  <Container as="main" minH="100vh" maxW="container.lg">
    <Box bg="gray.100" w="100%" p={4} borderColor="gray" borderWidth={2}>
      {children}
    </Box>
  </Container>
);

export default Main;
