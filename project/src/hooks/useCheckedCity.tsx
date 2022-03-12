import { useEffect, useState } from 'react';
import { ICardProps, PointType } from '../types';

function useCheckedCity(placeCardsData: ICardProps[], city: PointType, isOffersLoading: boolean) {
  const [arr, setArr] = useState<ICardProps[]>([]);

  useEffect(() => {
    if(isOffersLoading === true) {
      return;
    }

    placeCardsData.map((item) => {
      if(item.city.name === city.title) {
        setArr([...arr, item]);
      }
    });
  }, [isOffersLoading, city]);

  return arr;
}

export default useCheckedCity;
