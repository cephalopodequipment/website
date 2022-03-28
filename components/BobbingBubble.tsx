import Image from 'next/image';
import React, { forwardRef } from 'react';
import { BobbingBox } from '.';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type BobbingBubbleProps<TagName extends React.ElementType> =
  BoxProps<TagName> & {
    variant?: keyof typeof variantProps;
  };

const variantProps = {
  1: {
    src: '/img/bubble-1.png',
    width: 589,
    height: 575,
  },
  2: {
    src: '/img/bubble-2.png',
    width: 483,
    height: 392,
  },
  3: {
    src: '/img/bubble-3.png',
    width: 256,
    height: 241,
  },
};

const BobbingBubble: <TagName extends React.ElementType>(
  props: BobbingBubbleProps<TagName>
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  <TagName extends React.ElementType>(
    { variant = 1, ...props }: BobbingBubbleProps<TagName>,
    ref: any
  ) => (
    <Box pointerEvents="none" ref={ref} {...props}>
      <BobbingBox>
        <Image alt="Bubble" {...variantProps[variant]} />
      </BobbingBox>
    </Box>
  )
) as any;

export { BobbingBubble };
