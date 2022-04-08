import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IComments } from '../../types';
import { fetchComments } from '../../utils';
import ReviewsItem from '../reviewsItem/reviewsItem';

function ReviewsList() {

  const params = useParams();
  const offerId = Number(params.id);
  const [comments, setComments] = useState<IComments[]>([]);
  const getComments = fetchComments(offerId);

  useEffect(() => {
    getComments.then((data) => setComments(data));
  }, [offerId]);

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
