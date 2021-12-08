const Popular = ({ news }) => {
  return (
    <div className='popular col ms-xxl-4 mt-4 mt-lg-0'>
      {/* the header */}
      <h2 className='popular_title text-uppercase'>Most viewed</h2>

      {/* the content */}
      <ol className='popular_list list-group list-group-numbered mx-auto mx-lg-0 ps-lg-3 ps-xxl-0 col-md-10 col-xxl-12'>
        {news?.map((blog) => {
          return (
            <li className='blog_container list-group-item border-0 bg-transparent' key={blog.title}>
              <h5 className='blog_source d-inline-block mx-auto ps-4'>{blog.source.name}</h5>
              <h5 className='blog_text mx-auto ps-4 mb-3 mt-2'>{blog.title}</h5>
              <h6 className='blog_date mx-auto ps-4'>{blog.publishedAt?.slice(0, 10).replaceAll("-", "/ ")}</h6>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Popular;
