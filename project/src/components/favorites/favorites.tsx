import { ICardProps } from '../../types';
import FavoritesCard from '../favoritesCard/favoritesCard';

 interface FavProps {
  favorites: Array<ICardProps>
 }

function Favorites({favorites}: FavProps) {

  return (
    <main className='page__main page__main--favorites'>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              favorites.map((item) => <FavoritesCard key={item.id} offer={item} />)
            }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
