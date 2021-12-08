import { useEffect, useState } from "react";

const Latest = ({ news }) => {
  // LOGIC ///////////////////////////
  const [bigNews, setBigNews] = useState([]);
  const [smallNews, setSmallNews] = useState([]);

  useEffect(() => {
    // grouping the news
    setBigNews(news?.slice(0, 1));
    setSmallNews(news?.slice(1));
  }, [news]);

  // JSX ///////////////////////////
  return (
    <div className='latest col-12 col-xxl-9 mx-auto me-4'>
      <h2 className='latest_title mb-4'>Latest News</h2>

      {/* main content */}
      <div className='latest_blogs d-xl-flex'>
        {/* Big news */}
        <div className='latest_1 mx-auto col-12 col-xl-8 col-xxl-7 pe-3 mb-5 mb-xxl-0'>
          {bigNews?.map((blog) => {
            return (
              <div key={blog.title}>
                <img className='blog_img col-12 mb-4' src={blog.urlToImage} alt='blog img' />
                <h4 className='blog_source'>{blog.source.name}</h4>
                <h3 className='blog_title my-3 col-12 col-xl-11'>{blog.title}</h3>
                <p className='blog_text col-12 col-xl-11'>{blog.description}</p>
                <h6 className='blog_date mt-4'>{blog.publishedAt?.slice(0, 10).replaceAll("-", "/ ")}</h6>
              </div>
            );
          })}
        </div>

        {/* Small news */}
        <div className='latest_2 col ps-xl-3 d-xl-block d-md-flex justify-content-between'>
          {smallNews?.map((blog) => {
            return (
              <div className='mb-5 col-md-6 col-xl-12 px-md-3 px-xl-0' key={blog.title}>
                <img className='blog_img col-12 mb-4' src={blog.urlToImage} alt='blog img' />
                <h4 className='blog_source'>{blog.source.name}</h4>
                <h5 className='blog_title my-2'>{blog.title}</h5>
                <h6 className='blog_date mt-4'>{blog.publishedAt?.slice(0, 10).replaceAll("-", "/ ")}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Latest;
