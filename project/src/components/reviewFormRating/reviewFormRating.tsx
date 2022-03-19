import React from 'react';

interface IReviewRating {
  ratingReviewHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function ReviewFormRating({ratingReviewHandler}: IReviewRating) {
  const ratingList = [
    {value: '5', title: 'perfect'},
    {value: '4', title: 'good'},
    {value: '3', title: 'not bad'},
    {value: '2', title: 'badly'},
    {value: '1', title: 'terribly'},
  ];
  return (
    <div
      className="reviews__rating-form form__rating"
      onChange={ratingReviewHandler}
    >
      {
        ratingList.map((item) => (
          <React.Fragment key={item.value}>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={item.value} id={`${item}-stars`} type="radio" />
            <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default ReviewFormRating;
