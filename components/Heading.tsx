import React, { forwardRef } from 'react';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type HeadingProps = BoxProps<'h1'> & {
  variant?: 'primary' | 'secondary';
};

// eslint-disable-next-line react/display-name
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, ...props }, ref) => (
    <Box
      as="h1"
      color="white"
      fontName="display"
      fontSize="xxlarge"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  )
);

export { Heading };
