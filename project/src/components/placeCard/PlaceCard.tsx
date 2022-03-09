import { Link } from 'react-router-dom';
import { ICardProps } from '../../types';

type Item = {
  card: ICardProps
  getCardPoints: (card: {lat: number, lng: number}) => void,
}

function PlaceCard({card, getCardPoints}: Item): JSX.Element {

  const getRatingByPercent = (rating: number) => {
    const percent = Math.floor((rating * 100) / 5);

    return percent;
  };

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
        <a href="#">
          <img className="place-card__image" src={card.previewImage} width={260} height={200} alt="Place wallpapper" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{card.price}</b>
            <span className="place-card__price-text">/&nbsp;{card.description}</span>
          </div>
          <button className={`place-card__bookmark-button ${card.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingByPercent(card.rating)}%`}} />
            <span className="visually-hidden">{card.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${card.id}`}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
