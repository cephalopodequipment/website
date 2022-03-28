import random from 'lodash/random';
import React, { forwardRef, useEffect, useState } from 'react';
import { Box } from './Box';
import { BoxProps, BoxPropsWithConfigs } from './Box.types';

const BobbingBox: <TagName extends React.ElementType>(
  props: BoxProps<TagName>
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(({ children, ...props }, ref) => {
  const [rotationDuration, setRotationDuration] = useState(0);
  const [bobbleDuration, setBobbleDuration] = useState(0);

  useEffect(() => {
    setRotationDuration(random(3, 9));
    setBobbleDuration(random(3, 9));
  }, []);

  return (
    <Box
      animationName="slightRotation"
      animationDuration={`${rotationDuration}s`}
      ref={ref as any}
      zIndex="10"
    >
      <Box
        animationName="verticalBobble"
        animationDuration={`${bobbleDuration}s`}
      >
        <Box {...props}>{children}</Box>
      </Box>
    </Box>
  );
}) as any;

export { BobbingBox };
