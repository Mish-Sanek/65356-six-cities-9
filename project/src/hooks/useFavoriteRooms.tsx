import { useEffect, useState } from 'react';
import { APIRoute } from '../consts/apiRoutes';
import { getToken } from '../services/token';
import { api } from '../store';
import { ICardProps } from '../types';

const useFavoriteRooms = (placeCardsData: ICardProps[]) => {
  const [favoriteCards, setFavoriteCards] = useState<ICardProps[]>([]);
  const token = getToken();

  useEffect(() => {
    api.get(APIRoute.Favorite, {
      headers: {'X-Token': token},
    })
      .then((res) => res.data)
      .then((res) => setFavoriteCards(res));
  },[placeCardsData]);

  return favoriteCards;
};

export default useFavoriteRooms;
