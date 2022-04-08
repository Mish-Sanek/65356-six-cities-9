import { APIRoute } from './consts/apiRoutes';
import { api } from './store';
import { ICardProps, Point } from './types';

export const getRatingByPercent = (rating: number) => {
  const percent = Math.round((rating * 100) / 5);

  return percent;
};

export const getCityPoints = (items: ICardProps[], city: string) => items
  .filter((point) => point.city.name === city)
  .map(cardToPoint);

export const cardToPoint = (card: ICardProps): Point => ({
  lat: card.location.latitude,
  lng: card.location.longitude,
});

export const fetchComments = async (offerId: number) => {
  const {data} = await api.get(`${APIRoute.Comments}/${offerId}`);

  return data;
};
