import { Link } from 'react-router-dom';
import { ICardProps } from '../../types';
import PlaceCardFavorite from '../placeCardFavorite/placeCardFavorite';

interface IOffer {
  offer: ICardProps;
}

function FavoritesCard({offer}: IOffer) {
  return (
    <article className="favorites__card place-card">
      {
        offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          :
          null
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={150} height={110} alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <PlaceCardFavorite buttonClass='place-card__bookmark' favorite={offer.isFavorite} id={offer.id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.description}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
