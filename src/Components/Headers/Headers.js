import { useEffect, useState, useRef } from "react";
import { TopHeadlines } from "../API";
import HeadersBig from "./HeaderBig";
import HeadersSmall from "./HeadersSmall";
import Loading from "../Loading/Loading";

const Headers = () => {
  // LOGIC ////////////////////////
  const [allHeaders, setAllHeaders] = useState([]);
  const [HeaderBig, setHeaderBig] = useState([]);
  const [HeaderSmall, setHeaderSmall] = useState([]);
  const [smallScreen, setSmallScreen] = useState();
  const [loading, setLoading] = useState(true);

  const _isMounted = useRef(true);

  // fetching the news
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(TopHeadlines);
      const data = await response.json();
      setAllHeaders(data.articles);
      setLoading(false);
    }

    _isMounted.current && fetchData();

    // cleanup func
    return () => {
      _isMounted.current = false;
    };
  }, []);

  // triggering on small screens from news caption
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 580) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  });
  // checking on first render
  useEffect(() => {
    if (window.innerWidth <= 580) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, []);

  // grouping the header news
  useEffect(() => {
    // grouping the news
    if (allHeaders) {
      setHeaderBig(allHeaders.slice(0, 1));
      setHeaderSmall(allHeaders.slice(2, 4));
    }
  }, [allHeaders]);

  // the truncate func for short discription
  function truncate(text, n) {
    return text?.length > n ? text.substr(0, n) + "..." : text;
  }

  // JSX ////////////////////////
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className='headers d-xl-flex h-100'>
        <HeadersBig news={HeaderBig} truncate={truncate} smallScreen={smallScreen} />
        <div className='seprating_line mx-auto d-none d-xl-block'></div>
        <HeadersSmall news={HeaderSmall} truncate={truncate} smallScreen={smallScreen} />
      </div>
      {/* the seprating bottom line */}
      <div className='p-4 seprating_bottom_line'>
        <hr />
      </div>
    </>
  );
};

export default Headers;
