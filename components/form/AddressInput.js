import { Input } from '@chakra-ui/react';

const AddressInput = ({
  placeholder = 'Public Address (0x) or ENS',
  ...props
}) => {
  return <Input placeholder={placeholder} {...props} />;
};

export default AddressInput;
