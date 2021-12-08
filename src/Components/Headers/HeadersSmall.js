import news_Default from "../../Assets/news-default.jpeg";

const HeadersSmall = ({ news, truncate, smallScreen }) => {
  return (
    <div className='headers_small col ms-xl-4 d-flex flex-column justify-content-between'>
      {news.map((blog) => {
        return (
          blog.urlToImage && (
            <div className='blog position-relative h-100' key={blog.title}>
              <img className='col-12 h-100' src={blog.urlToImage || news_Default} alt='blog img' />
              <h5 className='position-absolute ps-4'>{blog.source.name}</h5>
              <h4 className='position-absolute ps-4 col-11'>{truncate(blog.description, smallScreen ? 48 : 95)}</h4>
            </div>
          )
        );
      })}
    </div>
  );
};

export default HeadersSmall;
