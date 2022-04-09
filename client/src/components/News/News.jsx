import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initNewsStart } from "../../redux/actions/news.actions";

function News(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initNewsStart());
  }, [dispatch]);

  const { news } = useSelector((state) => state);

  const truthHandler = ({ target }) => {
    const { id: newsId } = target.dataset;
    const [currNews] = news.values.filter((news) => news.id === newsId);
    if (currNews.status === "real") {
      alert("Это правда 😮");
    } else {
      alert("Это выдумка 😀");
    }
  };
  return (
    <div className="container d-flex flex-row flex-wrap justify-content-around col-6">
      <h3>Попробуйте угадать, какие новости правда, а какие выдумка!</h3>
      {news.error && <div>{news.error}</div>}
      {news?.values?.map((el) => (
        <div key={el.id} className="card m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text" style={{ height: "6rem" }}>
              {el.title}
            </p>
            <button
              type="button"
              className="btn btn-success mx-3"
              data-id={el.id}
              onClick={truthHandler}
            >
              Узнать правду!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
