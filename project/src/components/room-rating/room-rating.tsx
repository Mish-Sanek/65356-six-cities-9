import { getRatingByPercent } from '../../utils';

type RatingType = {
  rating: number;
}

function RoomRating({rating}: RatingType) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `${getRatingByPercent(rating)}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default RoomRating;
