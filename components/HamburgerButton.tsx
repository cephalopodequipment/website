import React, { forwardRef } from 'react';
import { Box, Icon } from '.';
import { BoxProps } from './Box.types';
import { IconName } from './Icon.types';

type HamburgerButtonProps<TagName extends React.ElementType> =
  BoxProps<TagName> & {
    iconName: IconName;
    isVisible: boolean;
  };

const HamburgerButton: <TagName extends React.ElementType>(
  props: HamburgerButtonProps<TagName>
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  <TagName extends React.ElementType>(
    { iconName, isVisible, ...props }: HamburgerButtonProps<TagName>,
    ref: any
  ) => (
    <Box
      ref={ref}
      responsiveProps={{
        desktopOrLarger: {
          display: 'none',
        },
        phoneOrTablet: {
          display: 'block',
          fontSize: 'xlarge',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'all' : 'none',
          position: 'absolute',
          right: 'normal',
          top: 'tight',
          transform: `translateX(${isVisible ? '0' : '300%'})`,
          transitionProperty: ['opacity', 'transform'],
          zIndex: '5000',
        },
      }}
      {...props}
    >
      <Icon display="none" name={iconName} />
    </Box>
  )
) as any;

export { HamburgerButton };
