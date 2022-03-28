import React, { forwardRef } from 'react';
import { Box } from './Box';
import { IconProps } from './Icon.types';

// eslint-disable-next-line react/display-name
const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ name = 'face-sad-sweat', variant = 'regular', ...props }, ref) => (
    <Box
      as="span"
      display="inline-block"
      className={`fa-${variant} fa-${name} fa-1x fa-fw`}
      ref={ref}
      {...props}
    ></Box>
  )
);

export { Icon };
