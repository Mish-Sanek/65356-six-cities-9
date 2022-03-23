import { AuthorizationStatus } from '../../consts/auth';
import { useAppSelector } from '../../hooks';
import { IComments } from '../../types';
import ReviewForm from '../reviewForm/reviewForm';
import ReviewsList from '../reviewsList/reviewsList';

interface IReviews {
  comments: IComments[],
  fetchComments: any,
}

function RoomReviews({comments, fetchComments}: IReviews) {

  const {authorizationStatus} = useAppSelector((state) => state.user);

  return (
    <section className="property__reviews reviews">
      <ReviewsList comments={comments} />
      {
        authorizationStatus === AuthorizationStatus.Auth && <ReviewForm fetchComments={fetchComments} />
      }
    </section>
  );
}

export default RoomReviews;
