import { useState, useCallback } from 'react';
import { TAB_KEY_CODE, SHIFT_KEY_CODE, KEY_DOWN } from 'const';

export const useDrawerToggler = (
  initialValue = false
): [boolean, (isOpen: boolean) => (e: any) => void] => {
  const [isOpen, setOpen] = useState(initialValue);

  const toggleOpen = useCallback(
    (isOpen: boolean) => ({ type, key }: any) => {
      if (
        type === KEY_DOWN &&
        (key === TAB_KEY_CODE || key === SHIFT_KEY_CODE)
      ) {
        return;
      }

      setOpen(isOpen);
    },
    []
  );

  return [isOpen, toggleOpen];
};
