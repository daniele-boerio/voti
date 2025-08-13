import { useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export function useDebounceEffect(effect: () => void, deps: any[], delay: number) {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      effect();
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [...deps, delay]);
}
