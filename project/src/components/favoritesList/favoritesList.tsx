import { ICardProps } from '../../types';
import FavoritesCard from '../favoritesCard/favoritesCard';

interface IFavorites {
  favoriteCards: ICardProps[];
}

function FavoritesList({favoriteCards}: IFavorites) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoriteCards.map((item: ICardProps) => <FavoritesCard key={item.id} offer={item} />)
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
