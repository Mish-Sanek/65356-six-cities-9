import { getData } from '../services/userData';
import { addToFavoritesAction, removeFromFavoritesAction } from '../store/apiActions';
import { AppDispatch } from '../types/state';

const useChangeFavorite = (dispatch: AppDispatch,id: number, favorite: boolean) => {
  const {token} = getData();

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
