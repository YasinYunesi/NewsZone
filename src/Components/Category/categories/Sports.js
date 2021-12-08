import { useState, useEffect, useRef } from "react";
import { Sports as SportsNews } from "../../API";
import Category from "../Category";

const Sports = () => {
  // LOGIC //////////////////////////
  const [news, setNews] = useState([]);
  const _isMounted = useRef(true);

  // fetching the news
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(SportsNews);
      const data = await response.json();
      data && setNews(data.articles);
    }

    _isMounted.current && fetchData();

    // cleanup func
    return () => {
      _isMounted.current = false;
    };
  }, []);

  // JSX //////////////////////////
  return (
    <div>
      <Category news={news} title='Sports' />
    </div>
  );
};

export default Sports;
