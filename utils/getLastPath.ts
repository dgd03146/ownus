export function getLastPath(str: string): string {
  // Split the string by '/' and get the last element of the resulting array
  const parts = str.split('/');
  const lastSubstring = parts[parts.length - 1].toUpperCase();

  return lastSubstring;
}
