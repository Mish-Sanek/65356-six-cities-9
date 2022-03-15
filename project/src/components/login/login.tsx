import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts/auth';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/apiActions';

function Login() {

  const [data, setData] = useState({login: 'Oliver.conner@gmail.com', password: '12345678'});

  const isAuth = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      email: data.login,
      password: data.password,
    };

    if(data.login !== null && data.password !== null) {
      dispatch(loginAction(newData));
      setData({
        login: '',
        password: '',
      });
    }
  };

  useEffect(() => {
    if(isAuth === AuthorizationStatus.Auth) {
      navigate('/');
    }
  }, [isAuth]);

  return (
    <main className='page__main page__main--login'>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                defaultValue={data.login}
                placeholder="Email"
                required
                onChange={(e) => setData({
                  ...data,
                  login: e.target.value,
                })}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                defaultValue={data.password}
                placeholder="Password"
                required
                onChange={(e) => setData({
                  ...data,
                  password: e.target.value,
                })}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
