import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile(props) {
  const { user } = useSelector((state) => state);

  return (
    <>
      <div className="container col-6">
        <div>Привет, {user?.value} 👋</div>
        <div>Давно не виделись!</div>
        <div>
          Хочешь посмотреть на свежие <Link to="/news">новости</Link>?
        </div>
      </div>
    </>
  );
}

export default Profile;
