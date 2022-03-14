import { useEffect, useState } from 'react';
import { ICardProps, PointType } from '../types';

function usePoints(placeCardsData: ICardProps[], city: PointType, isOffersLoading: boolean) {
  const [arr, setArr] = useState<PointType[]>([]);

  useEffect(() => {
    if(isOffersLoading === false) {
      placeCardsData.map((point) => {
        if(point.city.name === city.title) {
          setArr([...arr, {
            title: point.city.name,
            lat: point.location.latitude,
            lng: point.location.longitude,
          }]);
        }
      });
    }
  }, [isOffersLoading, city]);

  return arr;
}

export default usePoints;
