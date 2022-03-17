import { useMemo } from 'react';
import { ICardProps, PointType } from '../types';

function usePoints(placeCardsData: ICardProps[], city: PointType) {
  const memo = useMemo(() => {
    const getCheckedCityOffers = () => {
      const arr: PointType[] = [];

      placeCardsData.map((point) => {
        if(point.city.name === city.title) {
          arr.push({
            title: point.city.name,
            lat: point.location.latitude,
            lng: point.location.longitude,
          });
        }
      });

      return arr;
    };

    return getCheckedCityOffers();
  }, [placeCardsData, city.title]);

  return memo;
}

export default usePoints;
