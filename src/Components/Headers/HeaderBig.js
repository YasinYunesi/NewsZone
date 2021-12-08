import news_Default from "../../Assets/news-default.jpeg";

const HeadersBig = ({ news, truncate, smallScreen }) => {
  return (
    <div className='headers_big col-12 col-xl-8 me-xl-4 mb-4 mb-xl-0'>
      {news.map((blog) => {
        return (
          <div className='blog position-relative h-100' key={blog.title}>
            <img className='col-12 h-100' src={blog.urlToImage || news_Default} alt='blog img' />
            <h4 className='position-absolute ps-4 pe-3 ms-2'>{blog.source.name}</h4>
            <h2 className='position-absolute ps-4 pe-3 ms-2 col-12 col-lg-10'>
              {truncate(`${blog.description}`, smallScreen ? 50 : 200)}
            </h2>
            <h6 className='position-absolute ps-4 pe-3 ms-2'>{blog.publishedAt?.slice(0, 10).replaceAll("-", "/ ")}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default HeadersBig;
