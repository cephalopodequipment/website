import Image from 'next/image';
import React, { forwardRef } from 'react';
import { BobbingBox } from '.';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type PeekingCephalopodProps<TagName extends React.ElementType> =
  BoxProps<TagName> & {
    /* customProp?: boolean; */
  };

const PeekingCephalopod: <TagName extends React.ElementType>(
  props: PeekingCephalopodProps<TagName>
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  <TagName extends React.ElementType>(
    { children, ...props }: PeekingCephalopodProps<TagName>,
    ref: any
  ) => (
    <Box pointerEvents="none" ref={ref} {...props}>
      <BobbingBox>
        <Box animationName="peek">
          <Image
            alt="Smiling Cephalopod"
            src="/img/cephalopod-smiling.png"
            width={858}
            height={858}
          />
        </Box>
      </BobbingBox>
    </Box>
  )
) as any;

export { PeekingCephalopod };
