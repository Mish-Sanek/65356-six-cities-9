import { getRatingByPercent } from '../../utils';

type RatingType = {
  rating: number
}

function PlaceCardRating({rating}: RatingType) {

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${getRatingByPercent(rating)}%`}} />
        <span className="visually-hidden">{rating}</span>
      </div>
    </div>
  );
}

export default PlaceCardRating;
