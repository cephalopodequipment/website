import merge from 'lodash/merge';
import React from 'react';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type PageSectionProps<TagName extends React.ElementType> = BoxProps<TagName>;

const PageSection = <TagName extends React.ElementType>({
  children,
  ...props
}: PageSectionProps<TagName>) => (
  <Box
    as="section"
    width="100%"
    {...props}
    responsiveProps={merge(
      {
        phoneOnly: {
          padding: 'normal',
        },
        tabletOrLarger: {
          marginX: 'auto',
          maxWidth: '80vw',
        },
        bigDesktopOrLarger: {
          maxWidth: '60vw',
        },
      },
      props.responsiveProps
    )}
  >
    {children}
  </Box>
);

export { PageSection };
