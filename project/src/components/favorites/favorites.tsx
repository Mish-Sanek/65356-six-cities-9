import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import useFavoriteRooms from '../../hooks/useFavoriteRooms';
import { IFav } from '../../types';
import FavoritesEmpty from '../favoritesEmpty/favoritesEmpty';
import FavoritesList from '../favoritesList/favoritesList';

function Favorites() {

  const { placeCardsData } = useAppSelector((state) => state.data);
  const favorites = useFavoriteRooms(placeCardsData);
  const favoriteCards: IFav[] = [];
  const [cards, setCards] = useState(favoriteCards);

  useEffect(() => {
    favorites.forEach((item) => {
      const finderByName = favoriteCards.find((el: IFav) => el.title === item.city.name);

      if(!favoriteCards.length || !finderByName) {
        favoriteCards.unshift({
          title: item.city.name,
          offers: [item],
        });
      } else {
        favoriteCards.forEach((card) => {
          if(card.title === item.city.name) {
            card.offers.unshift(item);
          }
        });
      }

      setCards(favoriteCards);
    });
  }, [placeCardsData, favorites, setCards]);


  return (
    <main className='page__main page__main--favorites'>
      <div className="page__favorites-container container">
        {
          !cards.length ?
            <FavoritesEmpty />
            :
            <FavoritesList favoriteCards={cards} />
        }
      </div>
    </main>
  );
}

export default Favorites;
