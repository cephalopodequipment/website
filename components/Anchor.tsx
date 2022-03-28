import Link from 'next/link';
import React, { forwardRef } from 'react';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type AnchorProps = BoxProps<'a'> & {
  href: string;
  variant?: 'normal' | 'subtle';
};

const variantProps = {
  normal: {
    color: 'link',
    textDecoration: 'underline',
  },
  subtle: {
    color: 'white',
    textDecoration: 'none',
  },
};

// eslint-disable-next-line react/display-name
const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, href, variant = 'normal', ...props }, ref) => (
    <Link href={href} passHref={true} scroll={false}>
      <Box
        as="a"
        cursor="pointer"
        ref={ref}
        hoverProps={{
          color: 'link--hovered',
        }}
        {...(variantProps[variant] as AnchorProps)}
        {...props}
      >
        {children}
      </Box>
    </Link>
  )
);

export { Anchor };
