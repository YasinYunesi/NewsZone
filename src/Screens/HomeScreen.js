import Navbar from "../Components/Navbar";
import Headers from "./../Components/Headers/Headers";
import MainContent from "./../Components/MainContent/MainContent";

const HomeScreen = () => {
  return (
    <div className='px-4 pb-5'>
      {/* navbar */}
      <Navbar />

      {/* Headers */}
      <Headers />

      {/* Main content */}
      <MainContent />
    </div>
  );
};

export default HomeScreen;
