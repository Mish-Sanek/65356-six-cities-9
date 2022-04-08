import { AuthorizationStatus } from '../../consts/auth';
import useAuth from '../../hooks/useAuth';
import ReviewForm from '../reviewForm/reviewForm';
import ReviewsList from '../reviewsList/reviewsList';

function RoomReviews() {

  const authStatus = useAuth();

  return (
    <section className="property__reviews reviews">
      <ReviewsList />
      {
        authStatus === AuthorizationStatus.Auth && <ReviewForm />
      }
    </section>
  );
}

export default RoomReviews;
