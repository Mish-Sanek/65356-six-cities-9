export const getRatingByPercent = (rating: number) => {
  const percent = Math.round((rating * 100) / 5);

  return percent;
};
