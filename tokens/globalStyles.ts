import { colorPalette } from './colorPalette';
import { fontSizes, lineHeights } from './typography';
import { whiteSpaceNames } from './whiteSpaces';

export const globalStyles = {
  phoneOnly: {
    cssVariables: {
      fontSize: {
        xxlarge: '2rem',
      },
      lineHeight: {
        xxlarge: '2.2rem',
      },
    },
  },
  root: {
    styles: {
      backgroundColor: colorPalette['blue--dark'],
      fontSize: 'clamp(16px, 2.5vh, 22px)',
      lineHeight: '1.6rem',
      scrollPaddingTop: '10vh',
    },
    cssVariables: {
      fontSize: {
        ...fontSizes,
      },
      lineHeight: {
        ...lineHeights,
      },
      whiteSpace: {
        ...whiteSpaceNames,
      },
    },
  },
};
