import { Link } from 'react-router-dom';
import { ICardProps } from '../../types';
import { getRatingByPercent } from '../../utils';
import PlaceCardFavorite from '../placeCardFavorite/placeCardFavorite';

interface INearby {
  offer: ICardProps,
}

function RoomsNearbyItem({offer}: INearby) {

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`} onClick={handleScrollTop}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <PlaceCardFavorite favorite={offer.isFavorite} id={offer.id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingByPercent(offer.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} onClick={handleScrollTop}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default RoomsNearbyItem;
