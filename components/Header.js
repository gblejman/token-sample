import { Container, Flex, Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaBolt } from 'react-icons/fa';
import Logo from '../components/logo';

const Header = () => (
  <Container as="header" maxW="container.lg">
    <Flex p={4} color="white" justify="space-between">
      <Logo />

      <Stack direction="row" spacing={4} align="center">
        <Button
          leftIcon={<Icon as={FaBolt} />}
          colorScheme="teal"
          variant="solid"
        >
          Connect
        </Button>
        <Button colorScheme="teal" variant="outline">
          Login
        </Button>
      </Stack>
    </Flex>
  </Container>
);

export default Header;
