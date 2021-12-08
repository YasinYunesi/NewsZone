import { useState, useEffect, useRef } from "react";
import { Technology as TechnologyNews } from "../../API";
import Category from "../Category";

const Technology = () => {
  // LOGIC //////////////////////////
  const [news, setNews] = useState([]);
  const _isMounted = useRef(true);

  // fetching the news
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(TechnologyNews);
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
      <Category news={news} title='Technology' />
    </div>
  );
};

export default Technology;
