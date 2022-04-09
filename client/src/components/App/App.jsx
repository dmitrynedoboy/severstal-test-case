import { Routes, Route } from "react-router-dom";
import Footer from "../Navs/Footer";
import Header from "../Navs/Header";
import Login from "../Auth/Login";
import ProtectProfile from "../Profile/ProtectProfile";
import News from "../News/News";
import Home from "../Home/Home";

export default function App() {
  return (
    <>
      <Header />
      <main role="main">
        {/* настраиваем роутинг */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<ProtectProfile />} />
          <Route path="news" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
