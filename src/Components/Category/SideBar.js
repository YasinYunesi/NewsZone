import { Link } from "react-router-dom";
import {
  MdBusinessCenter,
  MdMovie,
  MdHealthAndSafety,
  MdStar,
  MdSportsFootball,
  MdScience,
  MdVideogameAsset,
} from "react-icons/md";

const SideBar = ({ data }) => {
  return (
    <div className='side_bar h-100 col-12 col-xl-3 col-xxl-2 pt-5'>
      <div className='side_bar_inner h-100 col-12 col-xl-3 col-xxl-2 p-5 shadow-lg'>
        {/* title */}
        <h6 className='side_title pt-5 pb-3'>Category</h6>

        {/* the list */}
        <ul className='side_list list-group ps-1'>
          <Link className={`my-2 py-2 ${data === "Business" && "active"}`} to='/category/business'>
            <li className='list-group-item border-0'>
              <MdBusinessCenter size={25} /> Business
            </li>
          </Link>
          <Link className={`my-2 py-2 ${data === "Entertainment" && "active"}`} to='/category/entertainment'>
            <li className='list-group-item border-0'>
              <MdMovie size={25} />
              Entertainment
            </li>
          </Link>
          <Link className={`my-2 py-2 ${data === "Health" && "active"}`} to='/category/health'>
            <li className='list-group-item border-0'>
              <MdHealthAndSafety size={25} />
              Health
            </li>
          </Link>
          <Link className={`my-2 py-2 ${data === "Sports" && "active"}`} to='/category/sports'>
            <li className='list-group-item border-0'>
              <MdSportsFootball size={25} />
              Sports
            </li>
          </Link>
          <Link className={`my-2 py-2 ${data === "General" && "active"}`} to='/category/general'>
            <li className='list-group-item border-0'>
              <MdStar size={25} />
              General
            </li>
          </Link>
          <Link className={`my-2 py-2 ${data === "Science" && "active"}`} to='/category/science'>
            <li className='list-group-item border-0'>
              <MdScience size={25} />
              Science
            </li>
          </Link>
          <Link className={`my-2 py-2 ${data === "Technology" && "active"}`} to='/category/technology'>
            <li className='list-group-item border-0'>
              <MdVideogameAsset size={25} />
              Technology
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
