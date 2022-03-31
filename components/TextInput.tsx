import React, { forwardRef } from 'react';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type TextInputProps = BoxProps<'input'> & {
  /* customProp?: boolean; */
};

const TextInput: (
  props: TextInputProps
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  ({ children, type = 'text', ...props }: TextInputProps, ref) => (
    <Box
      as="input"
      backgroundColor="blue--bright--30"
      borderColor="border"
      borderRadius="small"
      color="white"
      paddingX="normal"
      paddingY="tight"
      ref={ref as any}
      type={type}
      width="100%"
      {...props}
    >
      {children}
    </Box>
  )
) as any;

export { TextInput };
