export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  }
  // Adjust maxLength to account for the ellipsis
  return str.slice(0, maxLength - 3) + "...";
}
