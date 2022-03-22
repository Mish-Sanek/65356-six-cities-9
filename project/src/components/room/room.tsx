/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../consts/apiRoutes';
import usePoints from '../../hooks/usePoints';
import { api } from '../../store';
import { ICardProps, IComments } from '../../types';
import RoomGalery from '../roomGalery/roomGalery';
import RoomGoods from '../roomGoods/roomGoods';
import RoomHost from '../roomHost/roomHost';
import RoomRating from '../roomRating/roomRating';
import RoomReviews from '../roomReviews/roomReviews';
import Map from '../map/map';
import RoomsNearby from '../roomsNearby/roomsNearby';
import Loader from '../loader/Loader';

function Room() {

  const offersNearby: ICardProps[] = [
    {
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13,
        },
      },
      previewImage: 'https://9.react.pages.academy/static/hotel/9.jpg',
      images: [
        'https://9.react.pages.academy/static/hotel/13.jpg',
        'https://9.react.pages.academy/static/hotel/5.jpg',
        'https://9.react.pages.academy/static/hotel/8.jpg',
        'https://9.react.pages.academy/static/hotel/12.jpg',
        'https://9.react.pages.academy/static/hotel/7.jpg',
        'https://9.react.pages.academy/static/hotel/10.jpg',
        'https://9.react.pages.academy/static/hotel/9.jpg',
        'https://9.react.pages.academy/static/hotel/1.jpg',
        'https://9.react.pages.academy/static/hotel/3.jpg',
        'https://9.react.pages.academy/static/hotel/4.jpg',
        'https://9.react.pages.academy/static/hotel/14.jpg',
        'https://9.react.pages.academy/static/hotel/16.jpg',
        'https://9.react.pages.academy/static/hotel/2.jpg',
        'https://9.react.pages.academy/static/hotel/15.jpg',
      ],
      title: 'House in countryside',
      isFavorite: false,
      isPremium: false,
      rating: 2.9,
      type: 'apartment',
      bedrooms: 4,
      maxAdults: 5,
      price: 368,
      goods: [
        'Washer',
        'Laptop friendly workspace',
        'Air conditioning',
        'Towels',
        'Baby seat',
        'Breakfast',
      ],
      host: {
        id: 25,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg',
      },
      description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
      location: {
        latitude: 51.241402,
        longitude: 6.782314,
        zoom: 16,
      },
      id: 87,
    },
    {
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13,
        },
      },
      previewImage: 'https://9.react.pages.academy/static/hotel/19.jpg',
      images: [
        'https://9.react.pages.academy/static/hotel/7.jpg',
        'https://9.react.pages.academy/static/hotel/13.jpg',
        'https://9.react.pages.academy/static/hotel/17.jpg',
        'https://9.react.pages.academy/static/hotel/12.jpg',
        'https://9.react.pages.academy/static/hotel/11.jpg',
        'https://9.react.pages.academy/static/hotel/4.jpg',
        'https://9.react.pages.academy/static/hotel/10.jpg',
        'https://9.react.pages.academy/static/hotel/18.jpg',
        'https://9.react.pages.academy/static/hotel/20.jpg',
        'https://9.react.pages.academy/static/hotel/19.jpg',
        'https://9.react.pages.academy/static/hotel/15.jpg',
        'https://9.react.pages.academy/static/hotel/16.jpg',
        'https://9.react.pages.academy/static/hotel/5.jpg',
        'https://9.react.pages.academy/static/hotel/1.jpg',
      ],
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      isFavorite: false,
      isPremium: false,
      rating: 2.5,
      type: 'house',
      bedrooms: 2,
      maxAdults: 7,
      price: 294,
      goods: [
        'Laptop friendly workspace',
        'Breakfast',
      ],
      host: {
        id: 25,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg',
      },
      description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
      location: {
        latitude: 51.228402,
        longitude: 6.784314,
        zoom: 16,
      },
      id: 61,
    },
    {
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13,
        },
      },
      previewImage: 'https://9.react.pages.academy/static/hotel/19.jpg',
      images: [
        'https://9.react.pages.academy/static/hotel/3.jpg',
        'https://9.react.pages.academy/static/hotel/18.jpg',
        'https://9.react.pages.academy/static/hotel/5.jpg',
        'https://9.react.pages.academy/static/hotel/17.jpg',
        'https://9.react.pages.academy/static/hotel/19.jpg',
        'https://9.react.pages.academy/static/hotel/20.jpg',
        'https://9.react.pages.academy/static/hotel/6.jpg',
        'https://9.react.pages.academy/static/hotel/14.jpg',
        'https://9.react.pages.academy/static/hotel/15.jpg',
        'https://9.react.pages.academy/static/hotel/2.jpg',
        'https://9.react.pages.academy/static/hotel/10.jpg',
        'https://9.react.pages.academy/static/hotel/11.jpg',
        'https://9.react.pages.academy/static/hotel/9.jpg',
        'https://9.react.pages.academy/static/hotel/4.jpg',
      ],
      title: 'Waterfront with extraordinary view',
      isFavorite: false,
      isPremium: false,
      rating: 3.3,
      type: 'house',
      bedrooms: 3,
      maxAdults: 9,
      price: 969,
      goods: [
        'Breakfast',
        'Laptop friendly workspace',
        'Washer',
      ],
      host: {
        id: 25,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg',
      },
      description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
      location: {
        latitude: 51.243402,
        longitude: 6.791314,
        zoom: 16,
      },
      id: 26,
    },
  ];

  const navigate = useNavigate();

  const params = useParams();

  const [offer, setOffer] = useState<ICardProps | null>(null);
  const [comments, setComments] = useState<IComments[]>([]);
  const points = usePoints(offersNearby, { title: 'Dusseldorf', lat: 51.225402, lng: 6.776314});

  const offerId = Number(params.id);

  const fetchComments = async () => {
    const {data} = await api.get(`${APIRoute.Comments}/${offerId}`);
    setComments(data);
  };

  useEffect(() => {
    const fetchHotel =  async () => {
      const response = await api.get(`${APIRoute.Hotels}/${offerId}`)
        .then((res) => {
          setOffer(res.data);
        }).catch(() => {
          navigate('../not-found');
        });

      return response;
    };
    fetchHotel();
    fetchComments();

    return () => {
      setOffer(null);
      setComments([]);
    };
  }, [params, offerId]);

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
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
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
            <RoomReviews fetchComments={fetchComments} comments={comments} />
          </div>
        </div>
        <Map points={points} className="property__map map" />
      </section>
      <RoomsNearby offersNearby={offersNearby} />
    </main>
  );
}

export default Room;
