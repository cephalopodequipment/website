// https://github.com/kripod/react-polymorphic-box/blob/main/src/Box.tsx
import React from 'react';
import {
  animationNames,
  borderRadii,
  borderStyles,
  breakpoints,
  colorPalette,
  fontNames,
  fontSizes,
  transitionDurations,
  whiteSpaceNames,
  zIndices,
} from '../tokens';

export type AnimationDuration = TransitionDuration | `${number}${TimeUnit}`;

export type AnimationName = keyof ReturnType<typeof animationNames>;

export type BorderRadius = keyof typeof borderRadii | Length | number;

export type BorderStyle = keyof ReturnType<typeof borderStyles>;

export type Breakpoint = keyof typeof breakpoints;

export type Color = keyof typeof colorPalette;

export type ColumnsOrRows = number | Array<number | string>;

export type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FontName = keyof typeof fontNames;

export type FontSize = keyof typeof fontSizes | Length;

export type GridSpace = keyof typeof whiteSpaceNames;

export type GridSpaceOrLength = GridSpace | Length | number;

export type Length = `${number}${LengthUnit}` | 'auto' | `calc(${string})`;

export type ResponsiveProps<TagName extends React.ElementType> = {
  [K in Breakpoint]?: BoxProps<TagName>;
};

export type TimeUnit = 's' | 'ms';

export type TransitionDuration = keyof typeof transitionDurations;

export type LengthUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';

export type ZIndex = keyof typeof zIndices | number;

export type PropsWithBreakpoint = BoxProps<any> & {
  activeBreakpoints: Array<Breakpoint>;
};

export type EveryStyleProp = Omit<
  React.CSSProperties,
  keyof BoxPropsWithConfigs
>;

export const validStyleProps = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'alignmentBaseline',
  'all',
  'animation',
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationName',
  'animationPlayState',
  'animationTimingFunction',
  'appearance',
  'backdropFilter',
  'backfaceVisibility',
  'background',
  'backgroundAttachment',
  'backgroundBlendMode',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundPositionX',
  'backgroundPositionY',
  'backgroundRepeat',
  'backgroundRepeatX',
  'backgroundRepeatY',
  'backgroundSize',
  'baselineShift',
  'blockSize',
  'border',
  'borderBlockEnd',
  'borderBlockEndColor',
  'borderBlockEndStyle',
  'borderBlockEndWidth',
  'borderBlockStart',
  'borderBlockStartColor',
  'borderBlockStartStyle',
  'borderBlockStartWidth',
  'borderBottom',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderCollapse',
  'borderColor',
  'borderImage',
  'borderImageOutset',
  'borderImageRepeat',
  'borderImageSlice',
  'borderImageSource',
  'borderImageWidth',
  'borderInlineEnd',
  'borderInlineEndColor',
  'borderInlineEndStyle',
  'borderInlineEndWidth',
  'borderInlineStart',
  'borderInlineStartColor',
  'borderInlineStartStyle',
  'borderInlineStartWidth',
  'borderLeft',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRadius',
  'borderRight',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderSpacing',
  'borderStyle',
  'borderTop',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStyle',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'boxShadow',
  'boxSizing',
  'breakAfter',
  'breakBefore',
  'breakInside',
  'bufferedRendering',
  'captionSide',
  'caretColor',
  'clear',
  'clip',
  'clipPath',
  'clipRule',
  'color',
  'colorInterpolation',
  'colorInterpolationFilters',
  'colorRendering',
  'columnCount',
  'columnFill',
  'columnGap',
  'columnRule',
  'columnRuleColor',
  'columnRuleStyle',
  'columnRuleWidth',
  'columnSpan',
  'columnWidth',
  'columns',
  'contain',
  'content',
  'counterIncrement',
  'counterReset',
  'cursor',
  'cx',
  'cy',
  'd',
  'direction',
  'display',
  'dominantBaseline',
  'emptyCells',
  'fill',
  'fillOpacity',
  'fillRule',
  'filter',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexFlow',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'float',
  'floodColor',
  'floodOpacity',
  'font',
  'fontDisplay',
  'fontFamily',
  'fontFeatureSettings',
  'fontKerning',
  'fontSize',
  'fontStretch',
  'fontStyle',
  'fontVariant',
  'fontVariantCaps',
  'fontVariantEastAsian',
  'fontVariantLigatures',
  'fontVariantNumeric',
  'fontVariationSettings',
  'fontWeight',
  'gap',
  'grid',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnGap',
  'gridColumnStart',
  'gridGap',
  'gridRow',
  'gridRowEnd',
  'gridRowGap',
  'gridRowStart',
  'gridTemplate',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'height',
  'hyphens',
  'imageRendering',
  'inlineSize',
  'isolation',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'left',
  'letterSpacing',
  'lightingColor',
  'lineBreak',
  'lineHeight',
  'listStyle',
  'listStyleImage',
  'listStylePosition',
  'listStyleType',
  'margin',
  'marginBlockEnd',
  'marginBlockStart',
  'marginBottom',
  'marginInlineEnd',
  'marginInlineStart',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marker',
  'markerEnd',
  'markerMid',
  'markerStart',
  'mask',
  'maskType',
  'maxBlockSize',
  'maxHeight',
  'maxInlineSize',
  'maxWidth',
  'maxZoom',
  'minBlockSize',
  'minHeight',
  'minInlineSize',
  'minWidth',
  'minZoom',
  'mixBlendMode',
  'objectFit',
  'objectPosition',
  'offset',
  'offsetDistance',
  'offsetPath',
  'offsetRotate',
  'opacity',
  'order',
  'orientation',
  'orphans',
  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'overflow',
  'overflowAnchor',
  'overflowWrap',
  'overflowX',
  'overflowY',
  'overscrollBehavior',
  'overscrollBehaviorBlock',
  'overscrollBehaviorInline',
  'overscrollBehaviorX',
  'overscrollBehaviorY',
  'padding',
  'paddingBlockEnd',
  'paddingBlockStart',
  'paddingBottom',
  'paddingInlineEnd',
  'paddingInlineStart',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'page',
  'pageBreakAfter',
  'pageBreakBefore',
  'pageBreakInside',
  'paintOrder',
  'perspective',
  'perspectiveOrigin',
  'placeContent',
  'placeItems',
  'placeSelf',
  'pointerEvents',
  'position',
  'quotes',
  'r',
  'resize',
  'right',
  'rowGap',
  'rx',
  'ry',
  'scrollBehavior',
  'scrollMargin',
  'scrollMarginBlock',
  'scrollMarginBlockEnd',
  'scrollMarginBlockStart',
  'scrollMarginBottom',
  'scrollMarginInline',
  'scrollMarginInlineEnd',
  'scrollMarginInlineStart',
  'scrollMarginLeft',
  'scrollMarginRight',
  'scrollMarginTop',
  'scrollPadding',
  'scrollPaddingBlock',
  'scrollPaddingBlockEnd',
  'scrollPaddingBlockStart',
  'scrollPaddingBottom',
  'scrollPaddingInline',
  'scrollPaddingInlineEnd',
  'scrollPaddingInlineStart',
  'scrollPaddingLeft',
  'scrollPaddingRight',
  'scrollPaddingTop',
  'scrollSnapAlign',
  'scrollSnapStop',
  'scrollSnapType',
  'shapeImageThreshold',
  'shapeMargin',
  'shapeOutside',
  'shapeRendering',
  'size',
  'speak',
  'src',
  'stopColor',
  'stopOpacity',
  'stroke',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth',
  'tabSize',
  'tableLayout',
  'textAlign',
  'textAlignLast',
  'textAnchor',
  'textCombineUpright',
  'textDecoration',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationSkipInk',
  'textDecorationStyle',
  'textIndent',
  'textOrientation',
  'textOverflow',
  'textRendering',
  'textShadow',
  'textSizeAdjust',
  'textTransform',
  'textUnderlinePosition',
  'top',
  'touchAction',
  'transform',
  'transformBox',
  'transformOrigin',
  'transformStyle',
  'transition',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
  'unicodeBidi',
  'unicodeRange',
  'userSelect',
  'userZoom',
  'vectorEffect',
  'verticalAlign',
  'visibility',
  'whiteSpace',
  'widows',
  'width',
  'willChange',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
  'writingMode',
  'x',
  'y',
  'zIndex',
  'zoom',
];

export type BoxPropsWithConfigs<
  TagName extends React.ElementType = React.ElementType
> = {
  /** `BoxProps` to be applied to the `::after` psuedo element.
   * `content` is set to `""` automatically. */
  afterElementProps?: BoxProps<TagName>;
  animationDuration?: AnimationDuration;
  animationName?: AnimationName;
  as?: TagName;
  backgroundColor?: Color;
  /** `BoxProps` to be applied to the `::before` psuedo element.
   * `content` is set to `""` automatically. */
  beforeElementProps?: BoxProps<TagName>;
  border?: BorderStyle;
  borderBottom?: BorderStyle;
  borderBottomLeftRadius?: BorderRadius;
  borderBottomRightRadius?: BorderRadius;
  borderColor?: Color;
  borderBottomColor?: Color;
  borderLeftColor?: Color;
  borderRightColor?: Color;
  borderTopColor?: Color;
  /** Sets both `borderLeftColor` and `borderRightColor` */
  borderXColor?: Color;
  /** Sets both `borderBottomColor` and `borderTopColor` */
  borderYColor?: Color;
  borderLeft?: BorderStyle;
  borderRadius?: BorderRadius;
  borderRight?: BorderStyle;
  borderTop?: BorderStyle;
  borderTopLeftRadius?: BorderRadius;
  borderTopRightRadius?: BorderRadius;
  /** Sets both `borderLeft` and `borderRight` */
  borderX?: BorderStyle;
  /** Sets both `borderTop` and `borderBottom` */
  borderY?: BorderStyle;
  bottom?: GridSpaceOrLength;
  children?: React.ReactNode;
  color?: Color;
  columnGap?: GridSpaceOrLength;
  columns?: ColumnsOrRows;
  debug?: boolean;
  fontName?: FontName;
  fontSize?: FontSize;
  gap?: GridSpaceOrLength;
  height?: GridSpaceOrLength;
  /** `BoxProps` to be applied on `:hover` or `:focus`.
   *
   * Example:
   * ```
   * <Box
   *   hoverProps={{
   *     backgroundColor: 'danger',
   *   }}
   * >
   *   My background turns red on hover.
   * </Box>
   * ```
   */
  hoverProps?: BoxProps<TagName>;
  customSelectorProps?: {
    [selector: string]: BoxProps<TagName>;
  };
  isOnlyForScreenReaders?: boolean;
  left?: GridSpaceOrLength;
  lineHeight?: FontSize;
  margin?: GridSpaceOrLength;
  marginBottom?: GridSpaceOrLength;
  marginLeft?: GridSpaceOrLength;
  marginRight?: GridSpaceOrLength;
  marginTop?: GridSpaceOrLength;
  /** Sets both `marginLeft` and `marginRight` */
  marginX?: GridSpaceOrLength;
  /** Sets both `marginTop` and `marginBottom` */
  marginY?: GridSpaceOrLength;
  maxHeight?: GridSpaceOrLength;
  maxWidth?: GridSpaceOrLength;
  minHeight?: GridSpaceOrLength;
  minWidth?: GridSpaceOrLength;
  padding?: GridSpaceOrLength;
  paddingBottom?: GridSpaceOrLength;
  paddingLeft?: GridSpaceOrLength;
  paddingRight?: GridSpaceOrLength;
  paddingTop?: GridSpaceOrLength;
  /** Sets both `paddingLeft` and `paddingRight` */
  paddingX?: GridSpaceOrLength;
  /** Sets both `paddingTop` and `paddingBottom` */
  paddingY?: GridSpaceOrLength;
  pointerEvents?: 'all' | 'auto' | 'none';
  /** A map of `BoxProps` to be applied at each given breakpoint.
   *
   * Example:
   * ```
   * <Box
   *   responsiveProps={{
   *     phoneOnly: {
   *       display: 'none',
   *     },
   *     tabletOrLarger: {
   *       display: 'block',
   *     }
   *   }}
   * >
   *   Hidden on mobile!
   * </Box>
   * ```
   */
  responsiveProps?: ResponsiveProps<TagName>;
  right?: GridSpaceOrLength;
  rowGap?: GridSpaceOrLength;
  rows?: ColumnsOrRows;
  top?: GridSpaceOrLength;
  transitionDuration?: TransitionDuration;
  transitionProperty?: string | Array<string>;
  width?: GridSpaceOrLength;
  zIndex?: ZIndex;
};

export type BoxProps<TagName extends React.ElementType> =
  BoxPropsWithConfigs<TagName> &
    Omit<React.ComponentProps<TagName>, keyof BoxPropsWithConfigs> &
    EveryStyleProp;
