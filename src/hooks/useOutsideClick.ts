import { useEffect, useRef } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  handler: () => void,
  listenCapture = true
) {
  const ref = useRef<T>(null);

  useEffect(
    function () {
      function handleOutsideClick(this: Document, event: PointerEvent) {
        if (ref.current && !ref.current.contains(event.target as HTMLElement))
          handler();
      }

      document.addEventListener('click', handleOutsideClick, listenCapture);

      return () =>
        document.removeEventListener(
          'click',
          handleOutsideClick,
          listenCapture
        );
    },
    [handler, listenCapture]
  );

  return ref;
}
