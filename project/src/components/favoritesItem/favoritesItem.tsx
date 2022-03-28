import { ICardProps } from '../../types';
import FavoritesCard from '../favoritesCard/favoritesCard';

interface IOffer {
  offers: ICardProps[];
  city: string,
}

function FavoritesItem({offers, city}: IOffer) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <FavoritesCard offer={offer} key={offer.title} />)
        }
      </div>
    </li>
  );
}

export default FavoritesItem;
