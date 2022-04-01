import { Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';

const ToggleColorButton = (props) => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={<Icon as={FaMoon} />}
      onClick={toggleColorMode}
      {...props}
    />
  );
};

export default ToggleColorButton;
