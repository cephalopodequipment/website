export const fontNames = {
  'body': {
    fontFamily: 'Inter',
    fontWeight: 400,
  },
  'body--bold': {
    fontFamily: 'Inter',
    fontWeight: 700,
  },
  'display': {
    fontFamily: 'Whyte Inktrap',
    fontWeight: 500,
  },
  'display--bold': {
    fontFamily: 'Whyte Inktrap',
    fontWeight: 700,
  },
};

export const fontSizes = {
  xxlarge: '3.75rem',
  xlarge: '2rem',
  large: '1.333rem',
  normal: '1rem',
  small: '0.833rem',
  xsmall: '0.588rem',
};

export const lineHeights = {
  xxlarge: '3.75rem',
  xlarge: '2.2rem',
  large: '1.333rem',
  normal: '1.6rem',
  small: '1.2rem',
  xsmall: '1rem',
};

export const textStyles = {
  'heading--1': {
    as: 'h1',
    fontName: 'display',
    fontSize: 'xxlarge',
  },
  'heading--2': {
    as: 'h2',
    fontName: 'display',
    fontSize: 'xlarge',
  },
  'heading--3': {
    as: 'h3',
    fontSize: 'large',
  },
  'label': {
    fontSize: 'xsmall',
    fontName: 'body--bold',
  },
  'logo': {
    display: 'inline-block',
    fontName: 'display',
    lineHeight: '1.1em',
    textAlign: 'left',
  },
  'normal': {},
  'statistic': {
    as: 'var',
    color: 'highlighted',
    fontName: 'display--bold',
    fontSize: 'large',
    fontWeight: 800,
    responsiveProps: {
      phoneOnly: {
        fontSize: 'xlarge',
      },
    },
  },
  'voteabstain': {
    as: 'em',
    color: 'abstain',
    textTransform: 'uppercase',
  },
};
