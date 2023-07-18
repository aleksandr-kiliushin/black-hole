export const isServer = () => {
  return !('navigator' in globalThis);
};
