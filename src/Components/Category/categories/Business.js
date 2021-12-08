import { useEffect, useRef, useState } from "react";
import { Business as BusinessNews } from "../../API";
import Category from "../Category";

const Business = () => {
  // LOGIC //////////////////////////
  const [news, setNews] = useState([]);
  const _isMounted = useRef(true);

  // fetching the news
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(BusinessNews);
      const data = await response.json();
      setNews(data.articles);
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
      <Category news={news} title='Business' />
    </div>
  );
};

export default Business;
