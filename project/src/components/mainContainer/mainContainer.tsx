import { CardPoints, ICardProps, PointType } from '../../types';
import MainEmpty from '../mainEmpty/mainEmpty';
import Map from '../map/map';
import PlaceCard from '../placeCard/PlaceCard';
import Sort from '../sort/sort';

type ContainerTypes = {
  sortedOffers: ICardProps[],
  checkedCityOffers: ICardProps[],
  city: PointType,
  getCardPoints: (card: CardPoints) => void,
  points: PointType[],
  hoveredCardPoints: CardPoints,
}

function MainContainer({sortedOffers, checkedCityOffers, city, getCardPoints, points, hoveredCardPoints}: ContainerTypes): JSX.Element {
  return (
    !sortedOffers.length ?
      <MainEmpty />
      :
      <div className="cities">
        <div className={`cities__places-container ${!sortedOffers.length && 'cities__places-container--empty'} container`}>
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
        </div>
      </div>
  );
}

export default MainContainer;
