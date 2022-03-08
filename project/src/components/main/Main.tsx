import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOffers } from '../../store/action';
import { CardPoints, ICardProps, PointType } from '../../types';
import MainEmpty from '../mainEmpty/mainEmpty';
import Map from '../map/map';
import PlaceCard from '../placeCard/PlaceCard';
import Sort from '../sort/sort';
import Tabs from '../tabs/tabs';

function Main(): JSX.Element {

  const {placeCardsData, city, activeFilter, sortedOffers} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [hoveredCardPoints, setHoveredCardPoints] = useState<CardPoints>({lat: 0, lng: 0});

  const getCardPoints = (card: CardPoints) => {
    if(!card) {
      return;
    }

    setHoveredCardPoints(card);
  };

  const getPoints = (): PointType[] => {
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

  const points = getPoints();

  const getCheckedCityOffers = () => {
    const arr: ICardProps[] = [];

    placeCardsData.map((item) => {
      if(item.city.name === city.title) {
        arr.push(item);
      }
    });

    return arr;
  };

  const checkedCityOffers = getCheckedCityOffers();

  useEffect(() => {
    dispatch(changeOffers(checkedCityOffers));
  }, [activeFilter]);


  return (
    <main className={`page__main page__main--index ${!sortedOffers.length ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        !placeCardsData.length ?
          <MainEmpty />
          :
          <div className="cities">
            <div className={`cities__places-container ${!sortedOffers.length && 'cities__places-container--empty'} container`}>
              {
                placeCardsData.length ?
                  <>
                    <section className="cities__places places">
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found">{checkedCityOffers.length} places to stay in {city.title}</b>
                      <Sort />
                      <div className="cities__places-list places__list tabs__content">
                        {
                          sortedOffers.map((card: ICardProps) => <PlaceCard key={card.id} card={card} getCardPoints={getCardPoints} />)
                        }
                      </div>
                    </section>
                    <div className="cities__right-section">
                      <Map points={points} hoveredCardPoints={hoveredCardPoints} />
                    </div>
                  </>
                  :
                  <MainEmpty />
              }
            </div>
          </div>
      }
    </main>
  );
}

export default Main;
