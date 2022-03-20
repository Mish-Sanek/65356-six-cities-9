import { IComments } from '../../types';
import { getRatingByPercent } from '../../utils';

interface IComment {
  comment: IComments,
}

function ReviewsItem({comment}: IComment) {
  const parseDate = (data: string) => {
    const cutted = data.slice(0, 10);
    const date = new Date(cutted);

    return date.toLocaleString('en', {
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width={54} height={54} alt={`${comment.user.name} + 's avatar`} />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingByPercent(comment.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{parseDate(comment.date)}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
