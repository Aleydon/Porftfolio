/**
 * Joins class names together, filtering out falsy values.
 */
export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a date string for display.
 */
export function formatDate(dateStr: string): string {
  return dateStr;
}
