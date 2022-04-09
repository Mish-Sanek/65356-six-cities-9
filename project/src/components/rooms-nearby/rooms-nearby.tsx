import { ICardProps } from '../../types';
import RoomsNearbyItem from '../rooms-nearby-item/rooms-nearby-item';

interface INearby {
  offersNearby: ICardProps[],
}

function RoomsNearby({offersNearby}: INearby) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {
            offersNearby.map((offer) => <RoomsNearbyItem key={offer.id} offer={offer} />)
          }
        </div>
      </section>
    </div>
  );
}

export default RoomsNearby;
