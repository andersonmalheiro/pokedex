export const extractId = (url: string): number | null => {
  const id = url
    .split('/')
    .filter((el) => el)
    .reverse()[0];

  if (id && parseInt(id)) {
    return parseInt(id);
  }

  return null;
};
