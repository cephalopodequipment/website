import React, { forwardRef } from 'react';
import { Box } from './Box';
import { BoxProps } from './Box.types';

const variantPropMap = {
  primary: {
    backgroundColor: 'gradient',
    borderRadius: 'circle',
    color: 'white',
    fontSize: 'small',
    paddingX: 'loose',
    paddingY: 'normal',
    transform: 'scale(1)',
    transitionProperty: 'transform',
    hoverProps: {
      transform: 'scale(1.1)',
    },
  },
};

type ButtonProps<TagName extends React.ElementType = 'button'> =
  BoxProps<TagName> & {
    variant?: keyof typeof variantPropMap;
  };

const Button: <TagName extends React.ElementType>(
  props: ButtonProps<TagName>
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  <TagName extends React.ElementType>(
    { children, variant = 'primary', ...props }: ButtonProps<TagName>,
    ref?: unknown
  ) => (
    <Box
      as="button"
      beforeElementProps={{
        backgroundColor: 'glow',
        height: '100%',
        position: 'absolute',
        width: '80%',
      }}
      cursor="pointer"
      display="block"
      fontName="body--bold"
      ref={ref}
      whiteSpace="nowrap"
      {...(variantPropMap[variant] as BoxProps<TagName>)}
      {...props}
    >
      {children}
    </Box>
  )
) as any;

export { Button };
