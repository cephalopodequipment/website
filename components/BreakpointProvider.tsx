import isEqual from 'lodash/isEqual';
import throttle from 'lodash/throttle';
import React, { useContext, useEffect, useState } from 'react';
import { breakpoints } from '../tokens';
import { Breakpoint } from './Box.types';

const BreakpointContext = React.createContext<Array<Breakpoint>>([]);

const BreakpointProvider: (props: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  const [activeBreakpoints, setActiveBreakpoints] = useState<Array<Breakpoint>>(
    []
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      const bodyStyles = getComputedStyle(document.body);

      const currentActiveBreakpoints = Object.keys(breakpoints).filter(
        (breakpointName) =>
          bodyStyles.getPropertyValue(
            `--breakpoint--${breakpointName}--isActive`
          ) === 'true'
      );

      if (!isEqual(currentActiveBreakpoints, activeBreakpoints)) {
        setActiveBreakpoints(currentActiveBreakpoints as Array<Breakpoint>);
      }
    }, 500);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeBreakpoints]);

  return (
    <BreakpointContext.Provider value={activeBreakpoints as Array<Breakpoint>}>
      {activeBreakpoints && children}
    </BreakpointContext.Provider>
  );
};

const useBreakpoints = () => {
  return useContext(BreakpointContext);
};

export { BreakpointContext, BreakpointProvider, useBreakpoints };
