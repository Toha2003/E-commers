import { useEffect, useState } from "react";
import newsApi from "../api/newsapi";
import NewsCard from "../Components/news/NewsCard";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await newsApi.get();
        setNews(data.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  
  return (
    <div className="p-[50px]">
      {loading === true ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-3 gap-20 ">
          {news.map((el, index) => (
            <div
              key={index}
              className="border-2 rounded-xl border-gray-500 p-4 shadow-[0px_0px_10px_gray]"
            >
              <h1 className="font-bold">{el.title}</h1>
              <p className="py-5">{el.description}</p>
              <Link className="font-bold text-blue-600" to={`/news/${index}`}>
                {el.source.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
