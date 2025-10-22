import { useEffect, useState } from "react";
import newsApi from "../../api/newsapi";
import LoadingPage from "../../pages/LoadingPage";

const NewsCard = () => {
  const locationId = window.location.pathname.split("/").at(-1);
  const [news, setNews] = useState({});
  let [loading, setLoading] = useState(true);
  // const [newsMessage, setnewsMessage] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await newsApi.get();
        setNews(data.articles.find((el, index) => index == locationId));
        // setnewsMessage(news.filter((el, index) => index == locationId))
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  let { title, description, urlToImage, author, url } = news;
  console.log(news);

  console.log(news);

  return (
    <div className=" flex justify-center pt-10">
      <div className="w-[60%] border border-gray-500 shadow-[0px_0px_10px_gray] p-5 rounded-2xl ">
        {loading ? (
          <LoadingPage />
        ) : (
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="py-5">{description} </p>
            <span className="font-bold">
              {" "}
              Author:{" "}
              <a target="_blank" className="text-blue-700" href={url}>
                {author}
              </a>
            </span>
            <img className='rounded-2xl'  src={urlToImage} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
