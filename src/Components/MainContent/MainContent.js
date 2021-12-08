import { useEffect, useState, useRef } from "react";
import { MostViewed, Newest } from "../API";
import Latest from "./Latest";
import Popular from "./Popular";
import Loading from "../Loading/Loading";

const MainContent = () => {
  // LOGIC //////////////////////////////
  const [latestNews, setLatestNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const _isMounted = useRef(true);

  // fetching news
  useEffect(() => {
    // fetching the latest news
    async function getLatest() {
      const response = await fetch(Newest);
      const data = await response.json();
      setLatestNews(data.articles?.slice(4, 7));
      setLoading(false);
    }
    _isMounted.current && getLatest();

    // fetching the popular news
    async function getPopular() {
      const response = await fetch(MostViewed);
      const data = await response.json();
      setPopularNews(data.articles?.slice(0, 5));
      setLoading(false);
    }
    _isMounted.current && getPopular();

    // cleanup func
    return () => {
      _isMounted.current = false;
    };
  }, []);

  // JSX //////////////////////////////
  return loading ? (
    <Loading />
  ) : (
    <div className='main_content d-xxl-flex'>
      {/* latest news */}
      <Latest news={latestNews} />

      <div className='seprating_line mx-auto'></div>

      {/* most viewd (popular) news */}
      <Popular news={popularNews} />
    </div>
  );
};

export default MainContent;
