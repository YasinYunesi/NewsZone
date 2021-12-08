import { Link } from "react-router-dom";
import logo from "../Assets/Logo/logo_white_large.png";
import notFoundLogo from "../Assets/not_found_4.svg";

const NotFoundScreen = () => {
  return (
    <div className='not_found pt-4'>
      {/* navbar */}
      <Link to='/'>
        <img className='col-10 col-sm-6 col-md-4 col-lg-3 col-xxl-2 ps-4' src={logo} alt='logo' />
      </Link>

      {/* main content */}
      <div className='not_found_content d-flex flex-column align-items-center'>
        <img className='position-fixed col-6' src={notFoundLogo} alt='Not found!' />

        <div className='text-center my-auto'>
          <h1 className=''>Page not found!</h1>
          <p className='mx-auto fs-5 col-11 py-4'>
            The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
          </p>
          <Link className='btn shadow-none border-0 px-4 py-3 px-lg-5' to='/'>
            Go to HomePage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
