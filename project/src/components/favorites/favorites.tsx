/* eslint-disable no-debugger */
import { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { ICardProps, IFav } from '../../types';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesList from '../favorites-list/favorites-list';

function Favorites() {
  const favorites = useAppSelector((state) => state.data.placeCardsData.filter((card) => card.isFavorite));

  const cards = useMemo((): IFav[] => {
    const res: IFav[] = [];
    const map: Record<string, ICardProps[]> = {};
    favorites.forEach((item) => {
      if (map[item.city.name] === undefined) {
        map[item.city.name] = [];
      }
      map[item.city.name].push(item);
    });

    for (const [title, offers] of Object.entries(map)) {
      res.push({
        title,
        offers,
      });
    }

    return res;
  }, [favorites]);

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
