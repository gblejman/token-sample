import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const AmountInput = ({
  defaultValue = 0,
  min = 0,
  step = 0.01,
  precision = 2,
  ...props
}) => {
  return (
    <NumberInput
      defaultValue={defaultValue}
      min={min}
      step={step}
      precision={precision}
      {...props}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default AmountInput;
