import { useAppSelector } from '../../hooks';
import { ICardProps } from '../../types';
import FavoritesCard from '../favoritesCard/favoritesCard';
import FavoritesEmpty from '../favoritesEmpty/favoritesEmpty';

function Favorites() {

  const {placeCardsData} = useAppSelector((state) => state);

  const getFavorites = () => {
    const arr: ICardProps[] = [];
    placeCardsData.filter((item) => {
      if(item.isFavorite === true) {
        arr.push(item);
      }
    });

    if(!arr) {
      return;
    }

    return arr;
  };

  const favorites = getFavorites();

  return (
    <main className='page__main page__main--favorites'>
      <div className="page__favorites-container container">
        {
          !favorites?
            <FavoritesEmpty />
            :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  favorites.map((item: ICardProps) => <FavoritesCard key={item.id} offer={item} />)
                }
              </ul>
            </section>
        }
      </div>
    </main>
  );
}

export default Favorites;
