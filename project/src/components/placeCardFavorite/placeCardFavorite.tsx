import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../consts/apiRoutes';
import { AuthorizationStatus } from '../../consts/auth';
import { useAppDispatch, useAppSelector } from '../../hooks';
import UseChangeFavorite from '../../hooks/useChangeFavorite';
import { getToken } from '../../services/token';

interface IFavorite {
  buttonClass?: string,
  iconSize?: {
    width: number,
    height: number
  },
  favorite: boolean,
  id: number,
}

function PlaceCardFavorite({buttonClass = 'place-card__bookmark', iconSize = {width: 18, height: 19}, favorite, id}: IFavorite) {

  const token = getToken();
  const isAuth = useAppSelector((state) => state.user.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    if(isAuth !== AuthorizationStatus.Auth) {
      navigate(APIRoute.Login);
    } else {
      UseChangeFavorite(dispatch, id, favorite, token);
    }
  };

  return (
    <button
      className={`${buttonClass}-button ${favorite ? `${buttonClass  }-button--active` : ''} button`}
      type="button"
      onClick={handleFavorite}
    >
      <svg className={`${buttonClass  }-icon`} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default PlaceCardFavorite;
