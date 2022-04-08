import { ICardProps, Point } from '../../types';
import PlaceCard from '../placeCard/PlaceCard';

type CardsType = {
  sortedOffers: ICardProps[];
  getCardPoints: (card: Point) => void,
}

function PlaceCardsList({sortedOffers, getCardPoints}: CardsType) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortedOffers.map((card: ICardProps) => <PlaceCard key={card.id} card={card} getCardPoints={getCardPoints} />)
      }
    </div>
  );
}

export default PlaceCardsList;
