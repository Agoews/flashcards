"use client";

import {
  type SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

const isBrowser = () => typeof window !== "undefined";

export function useLocalStorageState<T>(
  key: string,
  defaultValue: T,
): readonly [T, (value: SetStateAction<T>) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    if (!isBrowser()) return;
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) {
        setValue(JSON.parse(stored) as T);
      }
    } catch {
      setValue(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setAndStore = useCallback(
    (updater: SetStateAction<T>) => {
      setValue((previous) => {
        const nextValue =
          typeof updater === "function"
            ? (updater as (prevState: T) => T)(previous)
            : updater;

        if (isBrowser()) {
          try {
            window.localStorage.setItem(key, JSON.stringify(nextValue));
          } catch {
            // Ignore write errors (e.g. private mode).
          }
        }

        return nextValue;
      });
    },
    [key],
  );

  return [value, setAndStore] as const;
}
