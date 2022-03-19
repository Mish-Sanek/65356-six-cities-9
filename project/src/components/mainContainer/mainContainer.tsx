import { CardPoints, ICardProps, PointType } from '../../types';
import MainEmpty from '../mainEmpty/mainEmpty';
import Map from '../map/map';
import PlaceCardsList from '../placeCardsList/placeCardsList';
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
            <PlaceCardsList sortedOffers={sortedOffers} getCardPoints={getCardPoints} />
          </section>
          <div className="cities__right-section">
            <Map points={points} hoveredCardPoints={hoveredCardPoints} />
          </div>
        </div>
      </div>
  );
}

export default MainContainer;
