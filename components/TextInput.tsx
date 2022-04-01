import React, { forwardRef } from 'react';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type TextInputProps = Omit<BoxProps<'input'>, 'ref'> & {
  /* customProp?: boolean; */
};

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ children, type = 'text', ...props }, ref) => (
    <Box
      as="input"
      backgroundColor="blue--bright--30"
      borderColor="border"
      borderRadius="small"
      color="white"
      paddingX="normal"
      paddingY="tight"
      ref={ref}
      type={type}
      width="100%"
      {...props}
    >
      {children}
    </Box>
  )
);

export { TextInput };
