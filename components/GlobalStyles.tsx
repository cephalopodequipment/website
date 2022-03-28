import get from 'lodash/get';
import kebabCase from 'lodash/kebabCase';
import { createGlobalStyle, CSSObject } from 'styled-components';
import {
  animationNames,
  breakpoints,
  colorPalette,
  globalStyles,
} from '../tokens';

const toCSSPropertyDefinitions = (styleObject: CSSObject) =>
  Object.entries(styleObject)
    .map(
      ([cssPropertyName, value]) => `${kebabCase(cssPropertyName)}: ${value};`
    )
    .join('\n');

const toCSSVariables = (variableMap: Record<string, Record<string, string>>) =>
  Object.keys(variableMap)
    .reduce<Array<string>>(
      (acc, variableName) => [
        ...acc,
        ...Object.entries(variableMap[variableName]).map(
          ([optionName, optionValue]) =>
            `--${variableName}--${optionName}: ${optionValue};`
        ),
      ],
      []
    )
    .join('\n');

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Whyte Inktrap';
    src: url('/fonts/whyte-inktrap/whyteinktrap-bold.eot');
    src: url('/fonts/whyte-inktrap/whyteinktrap-bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/whyte-inktrap/whyteinktrap-bold.woff2') format('woff2'),
        url('/fonts/whyte-inktrap/whyteinktrap-bold.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Whyte Inktrap';
    src: url('/fonts/whyte-inktrap/whyteinktrap-heavy.eot');
    src: url('/fonts/whyte-inktrap/whyteinktrap-heavy.eot?#iefix') format('embedded-opentype'),
        url('/fonts/whyte-inktrap/whyteinktrap-heavy.woff2') format('woff2'),
        url('/fonts/whyte-inktrap/whyteinktrap-heavy.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  * {
    border: none;
    box-sizing: border-box;
    font-size: inherit;
    font-style: inherit;
    line-height: inherit;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  ::selection {
    background-color: ${colorPalette['teal--bright']};
    color: ${colorPalette['blue--dark']}
  }

  ${Object.entries(animationNames())
    .map(
      ([name, animation]) => `
        @keyframes ${name} {
          ${animation.keyframes}
        }
      `
    )
    .join('\n')}

  ${Object.entries(breakpoints)
    .reverse()
    .map(([breakpointName, mediaQuery]) => {
      const cssVariables = toCSSVariables(
        get(globalStyles, `${breakpointName}.cssVariables`, {})
      );

      const styles = toCSSPropertyDefinitions(
        get(globalStyles, `${breakpointName}.styles`, {})
      );

      return `
        ${mediaQuery} {
          :root {
            --breakpoint--${breakpointName}--isActive: true;
            ${cssVariables}
            ${styles}
          }
        }
      `;
    })
    .join('\n')}
`;

export { GlobalStyles };
