import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Point } from '../../types';
import Loader from '../loader/Loader';
import Tabs from '../tabs/tabs';
import { changeOffers } from '../../store/dataProcess/dataProcess';
import useCheckedCity from '../../hooks/useCheckedCity';
import { State } from '../../types/state';
import { getCityPoints } from '../../utils';
import MainContainer from '../main-container/main-container';

const getPoints = (state: State) => getCityPoints(state.data.placeCardsData, state.tabs.city.title);

function Main(): JSX.Element {

  const {placeCardsData, activeFilter, sortedOffers, isOffersLoading} = useAppSelector((state) => state.data);
  const {city} = useAppSelector((state) => state.tabs);
  const points = useAppSelector(getPoints);
  const dispatch = useAppDispatch();
  const [hoveredPoint, setHoveredPoint] = useState<Point>({lat: 0, lng: 0});

  const getPoint = (card: Point) => {
    if(!card) {
      return;
    }

    setHoveredPoint(card);
  };

  const checkedCityOffers = useCheckedCity(placeCardsData, city);


  useEffect(() => {
    dispatch(changeOffers(checkedCityOffers));
  }, [placeCardsData, isOffersLoading, activeFilter, city, dispatch, checkedCityOffers]);


  return (
    <main className={`page__main page__main--index ${!sortedOffers.length ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        isOffersLoading === true ?
          <Loader />
          :
          <MainContainer
            sortedOffers={sortedOffers}
            checkedCityOffers={checkedCityOffers}
            city={city}
            getCardPoints={getPoint}
            hoveredMapPoint={hoveredPoint} points={points}
          />
      }
    </main>
  );
}

export default Main;
