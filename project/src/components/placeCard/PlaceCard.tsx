import { Link } from 'react-router-dom';
import { CardPoints, ICardProps } from '../../types';
import PlaceCardFavorite from '../placeCardFavorite/placeCardFavorite';
import PlaceCardRating from '../placeCardRating/placeCardRating';

type Item = {
  card: ICardProps
  getCardPoints: (card: CardPoints) => void,
}

function PlaceCard({card, getCardPoints}: Item): JSX.Element {

  const cardPoints = {
    lat: card.location.latitude,
    lng: card.location.longitude,
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => getCardPoints(cardPoints)}
    >
      {
        card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${card.id}`}>
          <img className="place-card__image" src={card.previewImage} width={260} height={200} alt="Place wallpapper" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{card.price}</b>
            <span className="place-card__price-text">/&nbsp;{card.description}</span>
          </div>
          <PlaceCardFavorite favorite={card.isFavorite} id={card.id} />
        </div>
        <PlaceCardRating rating={card.rating} />
        <h2 className="place-card__name">
          <Link to={`/offer/${card.id}`}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
