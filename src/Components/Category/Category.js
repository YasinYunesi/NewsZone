import { useEffect, useState } from "react";
import CategoryMain from "./CategoryMain";
import CategoryNavbar from "./CategoryNavbar";
import SideBar from "./SideBar";

const Category = ({ news, title }) => {
  // LOGIC //////////////////////////////////
  const [smallScreen, setSmallScreen] = useState();

  // triggering on small screens from news caption
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 990) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  });
  // checking on first render
  useEffect(() => {
    if (window.innerWidth <= 990) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, []);

  // JSX //////////////////////////////////
  return (
    <div className='category pb-5'>
      {/* navbar */}
      <CategoryNavbar />

      <div className='d-xl-flex'>
        {/* side bar */}
        <SideBar data={title} smallScreen={smallScreen} />

        {/* main content */}
        <CategoryMain news={news} title={title} smallScreen={smallScreen} />
      </div>
    </div>
  );
};

export default Category;
