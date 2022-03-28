import Image from 'next/image';
import React, { forwardRef } from 'react';
import { BobbingBox } from '.';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type FishProps<TagName extends React.ElementType> = BoxProps<TagName> & {
  /* customProp?: boolean; */
};

const Fish: <TagName extends React.ElementType>(
  props: FishProps<TagName>
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  <TagName extends React.ElementType>(
    { children, ...props }: FishProps<TagName>,
    ref: any
  ) => (
    <Box pointerEvents="none" ref={ref} {...props}>
      <BobbingBox>
        <Box animationName="amble">
          <Box display="inline-block" animationName="swim">
            <Image alt="Fish" src="/img/fish-1.png" width={136} height={79} />
          </Box>
        </Box>
      </BobbingBox>
    </Box>
  )
) as any;

export { Fish };
