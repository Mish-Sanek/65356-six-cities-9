export const getRatingByPercent = (rating: number) => {
  const percent = Math.floor((rating * 100) / 5);

  return percent;
};
