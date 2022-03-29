import mapValues from 'lodash/mapValues';
import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { breakpoints } from '../tokens';
import { computedPropConfigs, forwardedProps } from './Box.propConfigs';
import {
  BoxProps,
  BoxPropsWithConfigs,
  Breakpoint,
  PropsWithBreakpoint,
  validStyleProps,
} from './Box.types';
import { useBreakpoints } from './BreakpointProvider';

const resolveProp: (
  propName: keyof React.CSSProperties,
  props: BoxProps<any>,
  options?: {
    setDefaults?: boolean;
  }
) => CSSObject = (propName, props, { setDefaults = true } = {}) => {
  const givenPropValue = props[propName];

  if (givenPropValue === undefined) {
    return {};
  }

  if (propName in forwardedProps) {
    const aliasedPropNames = (forwardedProps as any)[propName as any] as any;

    return aliasedPropNames.reduce(
      (previous: any, aliasedPropName: any) => ({
        ...previous,
        ...resolveProp(
          aliasedPropName,
          {
            ...props,
            [aliasedPropName]: givenPropValue,
          },
          { setDefaults }
        ),
      }),
      {}
    );
  }

  const styleObject: any = {};

  if (!(propName in computedPropConfigs)) {
    if (validStyleProps.includes(propName)) {
      styleObject[propName] = givenPropValue;
    }
  } else {
    const propDefinition = computedPropConfigs[propName]!;

    if (setDefaults && propDefinition.setDefaults) {
      Object.keys(propDefinition.setDefaults).forEach((cssPropName) => {
        if (!(cssPropName in props)) {
          styleObject[cssPropName] = propDefinition.setDefaults![cssPropName];
        }
      });
    }

    if ('options' in propDefinition) {
      if (typeof propDefinition.options === 'function') {
        Object.assign(
          styleObject,
          propDefinition.options(props, propName, givenPropValue as any)
        );
      } else {
        const optionValue = (propDefinition.options as Record<string, unknown>)[
          givenPropValue as string
        ];

        if (typeof optionValue === 'undefined') {
          styleObject[propName] = givenPropValue;
        } else if (['number', 'string'].includes(typeof optionValue)) {
          styleObject[propName] = optionValue;
        } else {
          Object.assign(styleObject, optionValue);
        }
      }
    }
  }

  return styleObject;
};

const resolveProps: (
  props: PropsWithBreakpoint,
  options?: { setDefaults?: boolean }
) => CSSObject = (props, { setDefaults = true } = {}) =>
  Object.keys(props).reduce(
    (previous, propName) => ({
      ...resolveProp(propName as keyof React.CSSProperties, props, {
        setDefaults,
      }),
      ...previous,
    }),
    {}
  );

const Box: <TagName extends React.ElementType = 'div'>(
  props: BoxProps<TagName>
) => JSX.Element = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !Object.keys(computedPropConfigs).includes(prop) &&
    defaultValidatorFn(prop),
})<BoxPropsWithConfigs>`
  ${(props) => {
    const activeBreakpoints = useBreakpoints();

    const styleObject = resolveProps({
      ...props,
      activeBreakpoints,
    });

    (
      ['beforeElementProps', 'afterElementProps'] as Array<
        keyof BoxPropsWithConfigs
      >
    ).forEach((pseudoElementPropName) => {
      if (typeof props[pseudoElementPropName] === 'object') {
        styleObject[`&:${pseudoElementPropName.replace('ElementProps', '')}`] =
          {
            content: '""',
            ...resolveProps({
              ...props.beforeElementProps,
              activeBreakpoints,
            }),
          };
      }
    });

    if (typeof props.hoverProps === 'object') {
      styleObject['&:hover'] = resolveProps(
        {
          ...props.hoverProps,
          activeBreakpoints,
        },
        { setDefaults: false }
      );
    }

    if (typeof props.customSelectorProps === 'object') {
      Object.assign(
        styleObject,
        mapValues(props.customSelectorProps, (customSelectorProps) =>
          resolveProps({
            ...customSelectorProps,
            activeBreakpoints,
          })
        )
      );
    }

    if (typeof props.responsiveProps === 'object') {
      Object.entries(props.responsiveProps).forEach(
        ([breakpointName, responsiveProps]) => {
          styleObject[breakpoints[breakpointName as Breakpoint]] = {
            '&': resolveProps({
              ...responsiveProps,
              activeBreakpoints,
            }),
          };
        }
      );
    }

    if (props.debug) {
      console.log(styleObject);
    }

    return styleObject;
  }}
`;

export { Box };
