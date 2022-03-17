import { useAppSelector } from '../../hooks';
import FavoritesEmpty from '../favoritesEmpty/favoritesEmpty';
import FavoritesList from '../favoritesList/favoritesList';

function Favorites() {

  const {placeCardsData} = useAppSelector((state) => state.data);

  const favoriteCards = placeCardsData.filter((item) => item.isFavorite);

  return (
    <main className='page__main page__main--favorites'>
      <div className="page__favorites-container container">
        {
          !favoriteCards.length?
            <FavoritesEmpty />
            :
            <FavoritesList favoriteCards={favoriteCards} />
        }
      </div>
    </main>
  );
}

export default Favorites;
