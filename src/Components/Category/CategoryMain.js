import { useState } from "react";
import news_Default from "../../Assets/news-default.jpeg";
import no_result_img from "../../Assets/no_result3.svg";
import Loading from "./../Loading/Loading";

const CategoryMain = ({ news, title, smallScreen }) => {
  // LOGIC ///////////////////////////////
  const [noResult, setNoResult] = useState(false);

  // giving access to render no result on search
  setTimeout(() => {
    setNoResult(true);
  }, 1000);

  // the truncate func for short discription
  function truncate(text, n) {
    return text?.length > n ? text.substr(0, n) + "..." : text;
  }

  // JSX ///////////////////////////////
  return (
    <>
      {/* LOADING */}
      {news.length === 0 && !noResult && (
        <div className='cat_loading_container d-flex align-items-center mx-auto'>
          <Loading />
        </div>
      )}

      {/* NO RESULT */}
      {news.length === 0 && noResult && (
        <div className='cat_main_empty mx-auto col-8'>
          <div className='d-lg-flex justify-content-between col-12 col-lg-10 px-4 rounded-3 my-5 py-4 text-white mx-auto'>
            <div>
              <h1 className='fw-bold text-center text-lg-start'>Not a single match found for "{title}" !</h1>
              <h5 className='mt-5'>Search help</h5>
              <ul className='mt-3'>
                <li>Check your search for typos</li>
                <li>Change your search query</li>
                <li>The movie you're searching for may be deleted or not yet on our site</li>
              </ul>
            </div>
            <img className='col-12 col-lg-5' src={no_result_img} alt='No result found!' />
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      {news.length > 0 && (
        <div className='cat_main p-4 p-md-5 my-5'>
          {/* the title */}
          <h1 className='mt-4 text-capitalize'>{title}</h1>

          {/* news cards */}
          <div className='cat_cards_container pt-5'>
            {news.map((blog) => {
              return (
                blog.description?.length >= 100 &&
                blog.title && (
                  <div
                    className={`cat_card ${
                      smallScreen ? "cat_card_small" : "cat_card_normal"
                    } mb-5 mx-auto col-12 col-xxl-10 d-flex flex-column-reverse flex-lg-row shadow`}
                    key={blog.title}
                  >
                    <div className='p-3 col position-relative'>
                      <h5 className='col-10'>
                        {blog.source.name} <hr className='col-1' />
                      </h5>
                      <h4 className='my-3'>{blog.title}</h4>
                      <p className='ps-2'>{truncate(blog.description, 240)}</p>
                      <div className='position-lg-absolute w-100 start-0 bottom-0 px-3 py-2 d-flex flex-column flex-lg-row justify-content-between'>
                        <h6>{blog.author?.slice(0, 30) || "No author"}</h6>
                        <h6>{blog.publishedAt.slice(0, 10).replaceAll("-", "/ ")}</h6>
                      </div>
                    </div>
                    {/* the news's image */}
                    <div className='cat_card_img_container col-12 col-lg-6 position-relative'>
                      <img className='col-12 position-absolute' src={blog.urlToImage || news_Default} alt='blog img' />
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryMain;
