import { throttle } from 'lodash';
import random from 'lodash/random';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Box } from './Box';
import { BoxProps, Color } from './Box.types';

type TypeWriterProps<TagName extends React.ElementType> = BoxProps<TagName> & {
  initialDirection?: 1 | -1;
  numCycles?: number;
  values: Array<{
    color: Color;
    value: string;
  }>;
};

const TypeWriter: <TagName extends React.ElementType>(
  props: TypeWriterProps<TagName>
  // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  <TagName extends React.ElementType>(
    {
      initialDirection = -1,
      numCycles = Infinity,
      values,
      ...props
    }: TypeWriterProps<TagName>,
    ref: any
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [direction, setDirection] = useState(initialDirection);
    const [counter, setCounter] = useState(0);
    const [currentValue, setCurrentValue] = useState(
      initialDirection === 1 ? '' : values[0].value
    );
    const elementRef = useRef<any>();
    const activeIndex = counter % values.length;

    useEffect(() => {
      const checkIfVisible = throttle(() => {
        if (!elementRef?.current) {
          return;
        }

        const coords = elementRef.current.getBoundingClientRect();
        const newIsVisible =
          coords.top >= 100 &&
          coords.top <= document.documentElement.clientHeight;

        setIsVisible(newIsVisible);

        if (!isVisible && newIsVisible) {
          setDirection(initialDirection);
          setCurrentValue(initialDirection === 1 ? '' : values[0].value);
          setCounter(0);
        }
      }, 3000);

      window.addEventListener('scroll', checkIfVisible);

      return () => {
        window.removeEventListener('scroll', checkIfVisible);
      };
    }, [initialDirection, isVisible, values]);

    useEffect(() => {
      let innerTimer: any;

      const step = () => {
        if (!isVisible) {
          return;
        }

        if (direction === -1) {
          if (currentValue.length >= 1) {
            setCurrentValue(currentValue.slice(0, -1));
          } else {
            setDirection(1);
            setCounter((current) => current + 1);
          }
        } else {
          if (currentValue !== values[activeIndex].value) {
            setCurrentValue(
              values[activeIndex].value.slice(0, currentValue.length + 1)
            );
          } else {
            if (counter < numCycles) {
              innerTimer = setTimeout(() => {
                setDirection(-1);
              }, 3000);
            }
          }
        }
      };

      const timer = window.setTimeout(step, random(50, 150));

      return () => {
        clearTimeout(timer);
        clearTimeout(innerTimer);
      };
    }, [
      activeIndex,
      counter,
      currentValue,
      direction,
      isVisible,
      numCycles,
      values,
    ]);

    const refs = (incomingRef: any) => {
      if (ref?.current) {
        ref.current = incomingRef;
      }

      elementRef.current = incomingRef;
    };

    return (
      <Box
        as="span"
        borderBottomColor="white"
        color={values[activeIndex].color}
        ref={refs}
        {...props}
      >
        {currentValue}
        <Box
          animationName="blink"
          backgroundColor="white"
          borderRadius="circle"
          display="inline-block"
          height="1em"
          position="relative"
          bottom={-8}
          width={4}
        />
      </Box>
    );
  }
) as any;

export { TypeWriter };
