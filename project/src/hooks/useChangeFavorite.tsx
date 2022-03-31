import { addToFavoritesAction, removeFromFavoritesAction } from '../store/apiActions';
import { AppDispatch } from '../types/state';

const useChangeFavorite = (dispatch: AppDispatch,id: number, favorite: boolean, token: string) => {

  const addToFavorites = () => {
    dispatch(addToFavoritesAction({id, token}));
  };

  const removeFromFavorites = () => {
    dispatch(removeFromFavoritesAction({id, token}));
  };

  if(favorite === false) {
    return addToFavorites();
  } else {
    return removeFromFavorites();
  }
};

export default useChangeFavorite;
