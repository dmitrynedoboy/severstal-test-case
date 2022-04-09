import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserStart } from "../../redux/actions/user.actions";

function Header(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  function logoutHandler() {
    dispatch(logoutUserStart());
  }
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Тестовое задание</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              На главную
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">
              Новости
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Профиль
            </Link>
          </li>
          {user.value && (
            <li className="nav-item" onClick={logoutHandler}>
              <Link className="nav-link" to="/">
                Выйти
              </Link>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Header;
