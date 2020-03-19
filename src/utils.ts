export const matchesWord = (source: string, target: string): boolean => {
  return source.toLowerCase().includes(target.toLowerCase());
};
