export function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const limited = cleaned.slice(0, 11);
  let formatted = '';

  if (limited.length > 0) {
    formatted += '(' + limited.slice(0, 2);
  }
  if (limited.length > 2) {
    formatted += ') ' + limited.slice(2, 7);
  }
  if (limited.length > 7) {
    formatted += '-' + limited.slice(7, 11);
  }

  return formatted;
}