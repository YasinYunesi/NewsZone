import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../Category/Category";

const Search = () => {
  // LOGIC //////////////////////////
  const [news, setNews] = useState([]);

  const { query } = useParams();

  // fetching the news
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&domains=news.bbc.co.uk,economist.com,nytimes.com,msnbc.msn.com,cnn.com,abcnews.go.com,online.wsj.com,time.com,usatoday.com,washingtonpost.com,forbes.com,guardian.co.uk,latimes.com,timesonline.co.uk,foxnews.com,telegraph.co.uk,huffingtonpost.com,npr.org,cbsnews.com,csmonitor.com&apiKey=a9e28858004e44a7924a54ed1815156d`
      );
      const data = await response.json();
      setNews(data.articles);
    }

    fetchData();
  }, [query]);

  // JSX //////////////////////////
  return (
    <div>
      <Category news={news} title={query} />
    </div>
  );
};

export default Search;
