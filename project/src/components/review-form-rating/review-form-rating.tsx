import React from 'react';

interface IReviewRating {
  value: number;
  ratingReviewHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function ReviewFormRating({ ratingReviewHandler, value }: IReviewRating) {
  const ratingList = [
    {value: 5, title: 'perfect'},
    {value: 4, title: 'good'},
    {value: 3, title: 'not bad'},
    {value: 2, title: 'badly'},
    {value: 1, title: 'terribly'},
  ];

  return (
    <div className="reviews__rating-form form__rating">
      {
        ratingList.map((item) => (
          <React.Fragment key={item.value}>
            <input
              onChange={ratingReviewHandler}
              className="form__rating-input visually-hidden"
              name="rating" checked={value === item.value}
              value={item.value} id={`${item.value}-stars`}
              type="radio"
            />
            <label htmlFor={`${item.value}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
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
