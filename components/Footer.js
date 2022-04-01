import { Box } from '@chakra-ui/react';
import { Container, Text } from '@chakra-ui/react';

const Header = () => (
  <Container as="footer" maxW="container.lg">
    <Box bg="lightgray" w="100%" p={4} color="white">
      <Text fontSize="sm">Made with love in BA</Text>
    </Box>
  </Container>
);

export default Header;
