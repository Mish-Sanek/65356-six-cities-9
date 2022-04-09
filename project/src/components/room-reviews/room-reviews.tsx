import { useState } from 'react';
import { AuthorizationStatus } from '../../consts/auth';
import useAuth from '../../hooks/useAuth';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

function RoomReviews() {

  const authStatus = useAuth();
  const [isCommentsLoading, setIsCommentsLoading] = useState<boolean>(true);

  return (
    <section className="property__reviews reviews">
      <ReviewsList isCommentsLoading={isCommentsLoading}/>
      {
        authStatus === AuthorizationStatus.Auth && <ReviewForm setIsCommentsLoading={setIsCommentsLoading} />
      }
    </section>
  );
}

export default RoomReviews;
