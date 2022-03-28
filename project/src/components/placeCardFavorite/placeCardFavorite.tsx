import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import UseChangeFavorite from '../../hooks/useChangeFavorite';
import { getToken } from '../../services/token';

interface IFavorite {
  favorite: boolean,
  id: number,
}

function PlaceCardFavorite({favorite, id}: IFavorite) {

  const token = getToken();
  const isAuth = useAppSelector((state) => state.user.authorizationStatus);
  const navigate = useNavigate();

  const handleFavorite = () => {
    if(isAuth !== 'AUTH') {
      navigate('/login');
    } else {
      UseChangeFavorite(id, favorite, token);
    }

  };

  return (
    <button
      className={`place-card__bookmark-button ${favorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
      onClick={handleFavorite}
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default PlaceCardFavorite;
