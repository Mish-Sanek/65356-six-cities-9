import { IFav } from '../../types';
import FavoritesItem from '../favoritesItem/favoritesItem';

interface IFavorites {
  favoriteCards: IFav[];
}

function FavoritesList({favoriteCards}: IFavorites) {

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoriteCards.map((item: IFav) => <FavoritesItem key={item.title} offers={item.offers} city={item.title} />)
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
