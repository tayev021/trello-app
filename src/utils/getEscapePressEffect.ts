export function getEscapePressEffect(callback: () => void) {
  function escapeDown(event: KeyboardEvent) {
    if (event.key === 'Escape') callback();
  }

  document.addEventListener('keydown', escapeDown);

  return () => document.removeEventListener('keydown', escapeDown);
}
