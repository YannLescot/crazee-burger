export function focusTitleEditBox(ref) {
  if (!ref.current) return;
  ref.current.focus();
}
