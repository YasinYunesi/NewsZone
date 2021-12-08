import { useState, useEffect, useRef } from "react";
import { Health as HealthNews } from "../../API";
import Category from "../Category";

const Health = () => {
  // LOGIC //////////////////////////
  const [news, setNews] = useState([]);
  const _isMounted = useRef(true);

  // fetching the news
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(HealthNews);
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
      <Category news={news} title='Health' />
    </div>
  );
};

export default Health;
