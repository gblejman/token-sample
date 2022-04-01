import { VStack, HStack, ButtonGroup, Button, Text } from '@chakra-ui/react';
import AddressInput from './form/AddressInput';
import AmountInput from './form/AmountInput';

const TransferForm = () => {
  return (
    <VStack>
      <HStack>
        <Text>Address</Text>
        <AddressInput width="20em" />
      </HStack>

      <HStack>
        <Text>Amount</Text>
        <AmountInput width="20em" />
      </HStack>

      <ButtonGroup variant="outline" spacing="4" size="lg" padding={16}>
        <Button colorScheme="blackAlpha" variant="outline" width="6em">
          Cancel
        </Button>
        <Button colorScheme="teal" variant="solid" width="6em">
          Next
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default TransferForm;
