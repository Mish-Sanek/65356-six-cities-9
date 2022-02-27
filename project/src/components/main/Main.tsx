import { useState } from 'react';
import { POINTS } from '../../mocks/points';
import { ICardProps } from '../../types';
import MainEmpty from '../mainEmpty/mainEmpty';
import Map from '../map/map';
import PlaceCard from '../placeCard/PlaceCard';
import Sort from '../sort/sort';
import Tabs from '../tabs/tabs';

interface CardProps {
  placeCardsData: ICardProps[];
}

function Main({placeCardsData}: CardProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<{title: string, lat: number, lng: number, zoom: number}>({
    title: 'Amsterdam',
    lat: 52.379189,
    lng: 4.899431,
    zoom: 10,
  });

  const onTabHover = (tabName: string) => {
    const currentPoint: any = POINTS.find((point) =>
      point.title === tabName,
    );
    setActiveTab(currentPoint);
  };


  return (
    <main className={`page__main page__main--index ${!placeCardsData.length && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeTab={activeTab} onTabHover={onTabHover} />
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
                  <Map selectedPoint={activeTab} city={activeTab} points={POINTS} />
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
