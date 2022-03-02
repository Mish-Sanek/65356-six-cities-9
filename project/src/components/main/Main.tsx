import { useState } from 'react';
import { CITIES } from '../../consts/cities';
import { ICardProps, PointType } from '../../types';
import MainEmpty from '../mainEmpty/mainEmpty';
import Map from '../map/map';
import PlaceCard from '../placeCard/PlaceCard';
import Sort from '../sort/sort';
import Tabs from '../tabs/tabs';

interface CardProps {
  placeCardsData: ICardProps[];
}

function Main({placeCardsData}: CardProps): JSX.Element {
  const getPoints = () => {
    const arr: any[] = [];
    placeCardsData.map((point) => (
      arr.push({
        title: point.city.name,
        lat: point.city.location.latitude,
        lng: point.city.location.longitude,
      })
    ));
    return arr;
  };

  const points = getPoints();

  const [activeTab, setActiveTab] = useState<{title: string, lat: number, lng: number}>({
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
  });


  const onTabClick = (tab: PointType) => {
    const currentPoint: PointType = points.find((point) =>
      point.title === tab.title,
    );
    // eslint-disable-next-line no-console
    console.log(currentPoint);
    setActiveTab(currentPoint);
  };


  return (
    <main className={`page__main page__main--index ${!placeCardsData.length && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeTab={activeTab} tabs={CITIES} onTabClick={onTabClick} />
      <div className="cities">
        <div className={`cities__places-container ${!placeCardsData.length && 'cities__places-container--empty'} container`}>
          {
            placeCardsData.length ?
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placeCardsData.length} places to stay in Amsterdam</b>
                  <Sort />
                  <div className="cities__places-list places__list tabs__content">
                    {
                      placeCardsData.map((card: ICardProps) => <PlaceCard key={card.id} card={card} />)
                    }
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map activeTab={activeTab} points={points} />
                </div>
              </>
              :
              <MainEmpty />
          }
        </div>
      </div>
    </main>
  );
}

export default Main;
