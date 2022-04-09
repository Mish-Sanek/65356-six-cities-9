import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIRoute } from '../../consts/apiRoutes';
import { api } from '../../store';
import { fetchComments } from '../../utils';
import ReviewFormRating from '../review-form-rating/review-form-rating';

function ReviewForm({setIsCommentsLoading}: any) {
  const [review, setReview] = useState({comment: '', rating: {value: 0, title: ''}});
  const params = useParams();

  const offerId = Number(params.id);

  const postComment = async () => {
    setIsCommentsLoading(true);
    await api.post(`${APIRoute.Comments}/${offerId}`, {comment: review.comment, rating: review.rating.value})
      .then(() => fetchComments(offerId))
      .then(() => setIsCommentsLoading(false))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };


  const textReviewHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setReview({
      ...review,
      comment: e.target.value,
    });
  };

  const ratingReviewHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setReview({
      ...review,
      rating: {
        ...review.rating,
        value: Number(e.target.value),
      },
    });
  };

  const formSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    postComment();
    setReview({
      comment: '',
      rating: {value: 0, title: ''},
    });
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewFormRating value={review.rating.value} ratingReviewHandler={ratingReviewHandler} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={textReviewHandler}
        maxLength={300}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.comment.length < 50 || review.rating.value === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
