import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initUserStart } from "../../redux/actions/user.actions";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  // проверяем, что юзер не вошёл, иначе перебрасываем в профиль
  useEffect(() => {
    if (user.value) {
      navigate("/profile");
    }
  }, [user, navigate]);

  // собираем данные из формы и инициализируем аутентификацию
  const submitHandle = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData);
    dispatch(initUserStart(loginData));
  };

  return (
    <div className="container col-6">
      <form onSubmit={submitHandle}>
        <div className="d-flex form-floating mb-4 justify-content-center">
          <img className="mb-4" src="/logo.png" alt="" width="80" height="80" />
        </div>
        <h1 className="h3 mb-3 fw-normal text-center">Вход на сайт</h1>

        <div className="form-floating mb-4">
          <input
            name="login"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Введите ваш логин"
          />
          <label htmlFor="floatingInput">Логин</label>
        </div>
        <div className="form-floating  mb-4">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Введите ваш пароль"
          />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>
        {/* выводим ошибку, если введены некорректные данные или неполадки с сервером */}
        {user.error && (
          <div className="form-floating  mb-4">
            <p>{user.error}</p>
          </div>
        )}
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
