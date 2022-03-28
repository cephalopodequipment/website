import capitalize from 'lodash/capitalize';
import omit from 'lodash/omit';
import { CSSObject } from 'styled-components';
import {
  animationNames,
  borderRadii,
  borderStyles,
  colorPalette,
  fontNames,
  transitionDurations,
  zIndices,
} from '../tokens';
import { whiteSpacesAsCSSVariables } from '../tokens/whiteSpaces';
import {
  AnimationName,
  BoxProps,
  BoxPropsWithConfigs,
  Color,
} from './Box.types';

export type PropConfigs = {
  [K in keyof BoxProps<any>]: {
    /** Props that are handled identically to this one */
    aliases?: Array<keyof BoxProps<any>>;

    /** CSS properties to set at the same time */
    setDefaults?: CSSObject;

    /** Either a map of options to their computed CSS values, or
     * a function that receives `props`, `propName`, and `propValue`, and
     * returns a `CSSObject`
     */
    options?:
      | Record<string, string | number | CSSObject>
      | ((
          props: BoxProps<any>,
          propName?: K | keyof BoxProps<any>,
          propValue?: string | number
        ) => CSSObject);
  };
};

export const propConfigs: PropConfigs = {
  alignItems: {
    aliases: ['justifyContent'],
    setDefaults: {
      display: 'flex',
    },
    options: ({}, propName = 'alignItems', propValue) => ({
      [propName]: propValue,
    }),
  },
  animationName: {
    options: (props: BoxPropsWithConfigs) =>
      animationNames(props)[props.animationName as AnimationName].cssObject,
  },
  borderRadius: {
    aliases: [
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
      'borderTopLeftRadius',
      'borderTopRightRadius',
    ],
    options: borderRadii,
  },
  border: {
    aliases: [
      'borderTop',
      'borderRight',
      'borderBottom',
      'borderLeft',
      'borderColor',
      'borderTopColor',
      'borderRightColor',
      'borderBottomColor',
      'borderLeftColor',
    ],
    options: (props, propName = 'border') => {
      const borderEdgeName = String(propName).replace('Color', '') as
        | 'border'
        | 'borderTop'
        | 'borderRight'
        | 'borderBottom'
        | 'borderLeft';
      const borderStylesObject = borderStyles(props);
      const borderStyle = props[borderEdgeName] ?? 'normal';
      const borderColor = (props[`${borderEdgeName}Color`] ??
        'border') as Color;

      return {
        [`${borderEdgeName}Color`]: colorPalette[borderColor],
        [`${borderEdgeName}Style`]: borderStylesObject[borderStyle].borderStyle,
        [`${borderEdgeName}Width`]: borderStylesObject[borderStyle].borderWidth,
      };
    },
  },
  bottom: {
    aliases: ['left', 'right', 'top'],
    options: whiteSpacesAsCSSVariables,
  },
  color: {
    aliases: ['backgroundColor'],
    options: colorPalette,
  },
  columnGap: {
    setDefaults: {
      display: 'flex',
      flexDirection: 'row',
    },
    options: whiteSpacesAsCSSVariables,
  },
  columns: {
    aliases: ['rows'],
    setDefaults: {
      display: 'grid',
      gridAutoRows: '1fr',
    },
    options: (props: BoxPropsWithConfigs, propName = 'columns', propValue) => {
      let result;

      if (typeof props[propName as keyof BoxPropsWithConfigs] === 'number') {
        result = Array(propValue).fill('1fr').join(' ');
      } else if (Array.isArray(propValue)) {
        result = propValue.join(' ');
      } else {
        result = propValue;
      }

      return {
        [`gridTemplate${capitalize(String(propName))}`]: result,
      };
    },
  },
  display: {
    aliases: [
      'alignSelf',
      'backgroundImage',
      'cursor',
      'flexBasis',
      'flexGrow',
      'flexShrink',
      'height',
      'justifySelf',
      'lineHeight',
      'maxHeight',
      'maxWidth',
      'minHeight',
      'minWidth',
      'opacity',
      'overflow',
      'overflowX',
      'overflowY',
      'pointerEvents',
      'position',
      'textAlign',
      'textDecoration',
      'textTransform',
      'transform',
      'whiteSpace',
      'width',
    ],
    options: ({}, propName = 'display', propValue = '') => ({
      [propName]: propValue,
    }),
  },
  flexDirection: {
    setDefaults: {
      display: 'flex',
    },
    options: ({ flexDirection }) => ({
      flexDirection,
    }),
  },
  flexWrap: {
    setDefaults: {
      display: 'flex',
    },
    options: ({ flexWrap }) => ({
      flexWrap,
    }),
  },
  fontName: {
    options: fontNames,
  },
  fontSize: {
    options: ({ fontSize, lineHeight }) =>
      ({
        fontSize: `var(--fontSize--${fontSize as string})`,
        lineHeight: lineHeight ?? `var(--lineHeight--${fontSize as string})`,
      } as CSSObject),
  },
  gap: {
    setDefaults: {
      display: 'grid',
    },
    options: whiteSpacesAsCSSVariables,
  },
  isOnlyForScreenReaders: {
    options: () => ({
      clip: 'rect(0,0,0,0)',
      clipPath: 'inset(50%)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    }),
  },
  padding: {
    aliases: [
      'paddingLeft',
      'paddingRight',
      'paddingTop',
      'paddingBottom',
      'margin',
      'marginLeft',
      'marginRight',
      'marginTop',
      'marginBottom',
    ],
    options: whiteSpacesAsCSSVariables,
  },
  rowGap: {
    setDefaults: {
      display: 'flex',
      flexDirection: 'column',
    },
    options: whiteSpacesAsCSSVariables,
  },
  transitionDuration: {
    aliases: ['transitionProperty', 'transitionTimingFunction'],
    setDefaults: {
      transitionDuration: transitionDurations.normal,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
    },
    options: transitionDurations,
  },
  zIndex: {
    setDefaults: {
      position: 'relative',
    },
    options: zIndices,
  },
};

export const forwardedProps = {
  borderX: ['borderLeft', 'borderRight'],
  borderY: ['borderBottom', 'borderTop'],
  borderXColor: ['borderLeftColor', 'borderRightColor'],
  borderYColor: ['borderBottomColor', 'borderTopColor'],
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginBottom', 'marginTop'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingBottom', 'paddingTop'],
};

export const computedPropConfigs: PropConfigs = Object.entries(
  propConfigs
).reduce((previous, [propName, propConfig]) => {
  const propConfigsFromAliases = {} as any;
  const sanitizedPropConfig = omit(propConfig, 'aliases');

  propConfig.aliases?.forEach((aliasedPropName) => {
    propConfigsFromAliases[aliasedPropName as string] = sanitizedPropConfig;
  });

  return {
    ...previous,
    ...propConfigsFromAliases,
    [propName]: sanitizedPropConfig,
  } as const;
}, {});
