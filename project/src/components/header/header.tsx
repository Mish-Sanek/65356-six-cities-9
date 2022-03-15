/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts/auth';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/apiActions';

interface HeaderProps {
  locationState: string
}

function Header({locationState}: HeaderProps) {
  const isAuth = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          {
            locationState === '/login' ?
              ''
              :
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {
                    isAuth === AuthorizationStatus.Auth
                      ?
                      <>
                        <li className="header__nav-item user">
                          <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                            </div>
                            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          </Link>
                        </li>
                        <li className="header__nav-item">
                          <a className="header__nav-link" onClick={() => dispatch(logoutAction())}>
                            <span className="header__signout">Sign out</span>
                          </a>
                        </li>
                      </>
                      :
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to="/login">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__login">Sign in</span>
                        </Link>
                      </li>
                  }
                </ul>
              </nav>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
