import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import useAuth from '../../hooks/useAuth';
import useIsAuth from '../../hooks/useIsAuth';
import { loginAction } from '../../store/apiActions';

function Login() {

  const [data, setData] = useState({email: '', password: ''});
  const [isPswordWrong, setIsPswordWrong] = useState(false);

  const authStatus = useAuth();
  const isAuth = useIsAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(data.email !== null && data.password !== null) {
      dispatch(loginAction({
        email: data.email,
        password: data.password,
      }));
      setData({
        email: '',
        password: '',
      });
    } else {
      setIsPswordWrong(true);
    }
  };

  const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if(isAuth) {
      navigate('/');
    }
  }, [authStatus, navigate]);

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
                defaultValue={data.email}
                placeholder="Email"
                required
                onChange={onHandleInput}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                pattern='^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,}$'
                defaultValue={data.password}
                placeholder="Password"
                required
                onInput={onHandleInput}
              />
            </div>
            {
              isPswordWrong && <p>Пароль должен состоять из 1 буквы и 1 цифры</p>
            }
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
