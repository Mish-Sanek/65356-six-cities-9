import { Link } from 'react-router-dom';

interface HeaderProps {
  locationState: string
}

function Header({locationState}: HeaderProps) {
  const isAuth = true;

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
                    isAuth
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
                          <a className="header__nav-link" href="#">
                            <span className="header__signout">Sign out</span>
                          </a>
                        </li>
                      </>
                      :
                      <li className="header__nav-item user">
                        <a className="header__nav-link header__nav-link--profile" href="#">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__login">Sign in</span>
                        </a>
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
