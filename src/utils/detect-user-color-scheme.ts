export const detectUserColorScheme = () => {
  if (typeof localStorage !== 'undefined') {
    const lsMode = JSON.parse(localStorage.getItem(`theme-mode`) as string);

    if (lsMode) return lsMode;
  }

  if (
    typeof window !== 'undefined' &&
    window?.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches === true
  ) {
    return `dark`;
  }

  return `light`;
};
