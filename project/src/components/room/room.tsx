/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../consts/apiRoutes';
import { api } from '../../store';
import { ICardProps, Point } from '../../types';
import Map from '../map/map';
import Loader from '../loader/Loader';
import useNearbyRooms from '../../hooks/useNearbyRooms';
import { cardToPoint } from '../../utils';
import RoomGalery from '../room-galery/room-galery';
import PlaceCardFavorite from '../place-card-favorite/place-card-favorite';
import RoomRating from '../room-rating/room-rating';
import RoomGoods from '../room-goods/room-goods';
import RoomHost from '../room-host/room-host';
import RoomReviews from '../room-reviews/room-reviews';
import RoomsNearby from '../rooms-nearby/rooms-nearby';

function Room() {

  const navigate = useNavigate();

  const params = useParams();
  const offerId = Number(params.id);
  const [offer, setOffer] = useState<ICardProps | null>(null);
  const offersNearby = useNearbyRooms(offerId);
  const points = offersNearby.map(cardToPoint);
  const [currentPoints, setCurrentPoints] = useState<Point>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    const fetchHotel =  async () => {
      try {
        const response = await api.get(`${APIRoute.Hotels}/${offerId}`);
        const data = response.data;
        setOffer(data);
        setCurrentPoints({
          lat: data.city.location.latitude,
          lng: data.city.location.longitude,
        });
      } catch {
        navigate('../not-found');
      }
    };
    fetchHotel();
  }, [navigate, offerId]);

  if(offer === null) {
    return <Loader />;
  }

  return (
    <main className='page__main page__main--property'>
      <section className="property">
        <RoomGalery images={offer.images} />
        <div className="property__container container">
          <div className="property__wrapper">
            {
              offer.isPremium === true &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <PlaceCardFavorite iconSize={{width: 31, height: 33}} buttonClass="property__bookmark" favorite={offer.isFavorite} id={offer.id}/>
            </div>
            <RoomRating rating={offer.rating} />
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <RoomGoods goods={offer.goods} />
            <RoomHost host={offer.host} description={offer.description} />
            <RoomReviews />
          </div>
        </div>
        <Map points={points} activePoint={currentPoints} className="property__map map" />
      </section>
      <RoomsNearby offersNearby={offersNearby} />
    </main>
  );
}

export default Room;
