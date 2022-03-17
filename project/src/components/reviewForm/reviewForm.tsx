import React, { useState } from 'react';
import ReviewFormRating from '../reviewFormRating/reviewFormRating';

function ReviewForm() {
  const [review, setReview] = useState({text: '', rating: ''});

  const textReviewHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setReview({
      ...review,
      text: e.target.value,
    });
  };

  const ratingReviewHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setReview({
      ...review,
      rating: e.target.value,
    });
  };

  const formSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReview({
      text: '',
      rating: '',
    });
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewFormRating ratingReviewHandler={ratingReviewHandler} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.text}
        onChange={textReviewHandler}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.text.length < 50 || review.rating === ''}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
