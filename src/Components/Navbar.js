import { useState } from "react";
import { GoThreeBars, GoChevronDown, GoSearch } from "react-icons/go";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Assets/Logo/logo_small.png";

const Navbar = () => {
  // LOGIC /////////////////////////////////
  const [searchQuery, setSearchQuery] = useState();

  const history = useHistory();

  // accessing search query on click
  function searchHandler(e) {
    e.preventDefault();
    history.push(`/search/${searchQuery}`);
  }

  // JSX /////////////////////////////////
  return (
    <div className='costum_navbar py-4'>
      {/* the logo */}
      <Link to='/'>
        <img className='col-8 col-md-6 col-lg-4 col-xl-2' src={Logo} alt='logo' />
      </Link>

      {/* the navbar menu */}
      <div className='costum_navbar_nav w-100 d-lg-flex align-items-center justify-content-between my-4'>
        <nav className='navbar navbar-expand-lg py-1'>
          {/* nav menu start ///////////// */}
          {/* collapse btn */}
          <button
            className='navbar-toggler btn shadow-none border-0 ps-0'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarContent'
            aria-controls='navbarContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <GoThreeBars />
          </button>

          {/* collapsable menu */}
          <div className='collapse navbar-collapse' id='navbarContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link text-uppercase me-3 fw-bold'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/category/business' className='nav-link text-uppercase me-3'>
                  Business
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/category/entertainment' className='nav-link text-uppercase me-3'>
                  Entertainment
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/category/health' className='nav-link text-uppercase me-3'>
                  Health
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/category/sports' className='nav-link text-uppercase me-3'>
                  Sports
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  to='/'
                  className='nav-link text-uppercase me-3'
                  id='navDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  More <GoChevronDown />
                </Link>
                {/* dropdown menu */}
                <ul className='dropdown-menu' aria-labelledby='navDropdown'>
                  <li>
                    <Link to='/category/general' className='dropdown-item text-uppercase me-3'>
                      General
                    </Link>
                  </li>
                  <li>
                    <Link to='/category/science' className='dropdown-item text-uppercase me-3'>
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link to='/category/technology' className='dropdown-item text-uppercase me-3'>
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* nav menu end //////////////// */}
        </nav>

        {/* search icon */}
        <form className='navbar_search me-2 my-2 col-10 col-sm-6 col-md-4 col-lg-3 col-xxl-2' onSubmit={searchHandler}>
          <div className='input-group'>
            <button className='btn shadow-none px-3 py-2'>
              <GoSearch size={22} />
            </button>
            <input
              className='form-control'
              type='text'
              placeholder='Search...'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
