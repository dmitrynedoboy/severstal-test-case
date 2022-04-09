import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="fixed-bottom py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link className="nav-link px-2 text-muted" to="/">
            На главную
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-muted" to="/news">
            Новости
          </Link>
        </li>
      </ul>
      <a href="mailto:dmitrynedoboy@gmail.com">
        <p className="nav-item text-center text-muted">
          © 2022 Недобой Дмитрий
        </p>
      </a>
    </footer>
  );
}

export default Footer;
