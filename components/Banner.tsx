import random from 'lodash/random';
import React, { forwardRef, useEffect, useState } from 'react';
import { BobbingBox, Box } from '.';
import { BoxProps } from './Box.types';

type BannerProps<TagName extends React.ElementType = 'div'> = BoxProps<TagName>;

// eslint-disable-next-line react/display-name
const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ children, ...props }, ref) => {
    const [rotationDuration, setRotationDuration] = useState(0);
    const [bobbleDuration, setBobbleDuration] = useState(0);

    useEffect(() => {
      setRotationDuration(random(3, 9));
      setBobbleDuration(random(3, 9));
    }, []);

    return (
      <Box as="div" ref={ref} {...props}>
        <BobbingBox
          backgroundColor="blue"
          borderColor="blue--bright"
          borderRadius="small"
          fontSize="small"
          padding="normal"
          position="relative"
        >
          {children}
        </BobbingBox>
      </Box>
    );
  }
);

export { Banner };
