export function focusTitleEditBox(ref: React.RefObject<HTMLInputElement>) {
  if (!ref.current) return;
  ref.current.focus();
}
