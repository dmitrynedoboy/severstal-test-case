import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

function ProtectProfile(props) {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();

  // проверяем наличие текущей "сессии"
  useEffect(() => {
    if (!user.value) navigate("/login");
  }, [user, navigate]);
  return <Profile />;
}

export default ProtectProfile;
