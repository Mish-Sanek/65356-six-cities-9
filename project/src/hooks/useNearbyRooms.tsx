import { useEffect, useState } from 'react';
import { APIRoute } from '../consts/apiRoutes';
import { api } from '../store';
import { ICardProps } from '../types';

const useNearbyRooms = (id: number) => {
  const [offers, setOffers] = useState<ICardProps[]>([]);

  useEffect(() => {
    api.get(`${APIRoute.Hotels}/${id}/nearby`).then((res) => res.data).then((res) => setOffers(res));

    return () => {
      setOffers([]);
    };
  },[]);

  return offers;
};

export default useNearbyRooms;
