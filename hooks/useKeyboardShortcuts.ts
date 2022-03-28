import Mousetrap from 'mousetrap';
import { useEffect, useRef } from 'react';

type KeyName =
  | 'shift'
  | 'ctrl'
  | 'alt'
  | 'meta'
  | 'option'
  | 'command'
  | 'backspace'
  | 'tab'
  | 'enter'
  | 'return'
  | 'capslock'
  | 'esc'
  | 'escape'
  | 'space'
  | 'pageup'
  | 'pagedown'
  | 'end'
  | 'home'
  | 'left'
  | 'up'
  | 'right'
  | 'down'
  | 'ins'
  | 'del'
  | 'plus';

type KeyMap = {
  [combo in KeyName]?: Parameters<Mousetrap.MousetrapStatic['bind']>[1];
};

export const useKeyboardShortcuts: (
  keyMap: KeyMap,
  node?: HTMLElement
) => void = (keyMap, node) => {
  const mousetrapInstance = useRef<Mousetrap.MousetrapInstance>();

  useEffect(() => {
    mousetrapInstance.current = new Mousetrap(node || document?.body);

    Object.entries(keyMap).forEach(([combo, handler]) => {
      mousetrapInstance.current?.bind(combo, handler);
    });

    return () => {
      mousetrapInstance.current?.reset();
    };
  }, [keyMap, node]);

  return mousetrapInstance.current;
};
