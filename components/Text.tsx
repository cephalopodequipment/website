import { textStyles } from '../tokens/typography';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type TextProps<TagName extends React.ElementType> = BoxProps<TagName> & {
  variant?: keyof typeof textStyles;
};

const Text = <TagName extends React.ElementType = 'span'>({
  children,
  variant = 'normal',
  ...props
}: TextProps<TagName>) => (
  <Box as="span" {...(textStyles[variant] as BoxProps<TagName>)} {...props}>
    {children}
  </Box>
);

export { Text };
