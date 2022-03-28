import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CardPoints } from '../../types';
import MainContainer from '../mainContainer/mainContainer';
import Loader from '../loader/Loader';
import Tabs from '../tabs/tabs';
import { changeOffers } from '../../store/dataProcess/dataProcess';
import usePoints from '../../hooks/usePoints';
import useCheckedCity from '../../hooks/useCheckedCity';

function Main(): JSX.Element {

  const {placeCardsData, activeFilter, sortedOffers, isOffersLoading} = useAppSelector((state) => state.data);
  const {city} = useAppSelector((state) => state.tabs);
  const dispatch = useAppDispatch();
  const [hoveredCardPoints, setHoveredCardPoints] = useState<CardPoints>({lat: 0, lng: 0});

  const getCardPoints = (card: CardPoints) => {
    if(!card) {
      return;
    }

    setHoveredCardPoints(card);
  };

  const points = usePoints(placeCardsData, city);
  const checkedCityOffers = useCheckedCity(placeCardsData, city);


  useEffect(() => {
    dispatch(changeOffers(checkedCityOffers));
  }, [placeCardsData, isOffersLoading, activeFilter, city]);


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
