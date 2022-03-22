import { IComments } from '../../types';
import ReviewsItem from '../reviewsItem/reviewsItem';

interface IReviews {
  comments: IComments[],
}

function ReviewsList({comments}: IReviews) {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          comments.map((comment) => <ReviewsItem key={comment.id} comment={comment} />)
        }
      </ul>
    </>
  );
}

export default ReviewsList;
