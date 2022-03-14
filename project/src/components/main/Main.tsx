import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOffers } from '../../store/action';
import { CardPoints, ICardProps, PointType } from '../../types';
import MainContainer from '../container/mainContainer';
import Loader from '../loader/Loader';
import Tabs from '../tabs/tabs';

function Main(): JSX.Element {

  const {placeCardsData, city, activeFilter, sortedOffers, isOffersLoading} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [hoveredCardPoints, setHoveredCardPoints] = useState<CardPoints>({lat: 0, lng: 0});

  const getCardPoints = (card: CardPoints) => {
    if(!card) {
      return;
    }

    setHoveredCardPoints(card);
  };

  const getPoints = () => {
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

  const getCheckedCityOffers = () => {
    const arr: ICardProps[] = [];

    placeCardsData.map((item) => {
      if(item.city.name === city.title) {
        arr.push(item);
      }
    });

    return arr;
  };

  const points = getPoints();
  const checkedCityOffers = getCheckedCityOffers();

  useEffect(() => {
    dispatch(changeOffers(checkedCityOffers));
  }, [isOffersLoading, activeFilter, city]);


  return (
    <main className={`page__main page__main--index ${!sortedOffers.length ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        isOffersLoading === true ?
          <Loader />
          :
          <MainContainer sortedOffers={sortedOffers} checkedCityOffers={checkedCityOffers} city={city} getCardPoints={getCardPoints} hoveredCardPoints={hoveredCardPoints} points={points}  />
      }
    </main>
  );
}

export default Main;
