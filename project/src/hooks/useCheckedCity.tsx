import { useMemo } from 'react';
import { ICardProps, CityPoint } from '../types';

function useCheckedCity(placeCardsData: ICardProps[], city: CityPoint) {

  const checkedCity = useMemo(() => {
    const getCheckedCityOffers = () => {
      const arr: ICardProps[] = [];

      placeCardsData.map((item) => {
        if(item.city.name === city.title) {
          arr.push(item);
        }
      });

      return arr;
    };

    return getCheckedCityOffers();
  }, [placeCardsData, city.title]);

  return checkedCity;
}

export default useCheckedCity;
