import { useState, useCallback } from 'react';
import { not } from 'ramda';

export const useToggle = (
  initialValue = false
): [boolean, (e: any) => void] => {
  const [isOpen, setOpen] = useState(initialValue);

  const toggleOpen = useCallback((e: any) => setOpen(not), []);

  return [isOpen, toggleOpen];
};
