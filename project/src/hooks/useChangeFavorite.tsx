import { store } from '../store';
import { addToFavoritesAction, removeFromFavoritesAction } from '../store/apiActions';

const useChangeFavorite = (id: number, favorite: boolean, token: string) => {

  const addToFavorites = () => {
    store.dispatch(addToFavoritesAction({id, token}));
  };

  const removeFromFavorites = () => {
    store.dispatch(removeFromFavoritesAction({id, token}));
  };

  if(favorite === false) {
    addToFavorites();
  } else {
    removeFromFavorites();
  }
};

export default useChangeFavorite;
