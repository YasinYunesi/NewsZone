import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import logo from "../../Assets/Logo/logo_small.png";

const CategoryNavbar = () => {
  // LOGIC /////////////////////////////
  const [searchQuery, setSearchQuery] = useState();

  const history = useHistory();

  // accessing search query on click
  function searchHandler(e) {
    e.preventDefault();
    history.push(`/search/${searchQuery}`);
    e.target[1].value = "";
    e.target[1].blur();
  }

  // JSX /////////////////////////////
  return (
    <nav className='cat_navbar navbar pt-3 pe-4 shadow position-fixed col-12 d-flex flex-column flex-sm-row align-items-center'>
      {/* logo */}
      <Link className='col-8 col-sm-5 col-md-4 col-lg-3 col-xxl-2 ms-lg-3' to='/' title='Go to home screen.'>
        <img className='col-12' src={logo} alt='logo' />
      </Link>

      {/* search part */}
      <form className='navbar_search col-8 col-sm-5 col-md-4 col-lg-3 col-xxl-2 mt-4 mt-md-0' onSubmit={searchHandler}>
        <div className='input-group'>
          <button className='btn shadow-none px-3 py-2'>
            <GoSearch size={22} />
          </button>
          <input className='form-control' type='text' placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
      </form>
    </nav>
  );
};

export default CategoryNavbar;
