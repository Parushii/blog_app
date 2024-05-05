import React, { useEffect,useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
  <div className=" mx-auto px-4 flex justify-between">
        <div className="text-white text-3xl flex items-center">
            {/* <div className="mr-4 cursor-pointer" onClick={toggleSidebar}>
        <GiHamburgerMenu />
            </div>
            {showSidebar && 
            (
            <div className="absolute left-0 top-0 h-screen w-80 bg-gray-900">
                <div className="absolute right-2 top-2 cursor-pointer"onClick={toggleSidebar}> <RxCross1/></div>
                <div className="absolute bottom-2  flex items-center justify-center w-80 cursor-pointer">
      <Link
        to="/login"
        className="text-gray-300  px-4 py-2  text-2xl mr-2"
      >
        Logout
      </Link>
   
    </div>
            </div>
        )} */}
    <Link to="/" className="text-white text-lg font-semibold tracking-wider py-3">
      BlogApp
    </Link>
        </div>
    
    <div className="hidden lg:block">
      <ul className="flex items-center  mt-4 ml-2">
        <li className="mr-6">
          <Link
            to="/"
            className={`hover:text-gray-300 text-white ${
              location.pathname === "/" ? "font-bold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`hover:text-gray-300 text-white ${
              location.pathname === "/blog" ? "font-bold" : ""
            }`}
          >
            AllBlogs
          </Link>
        </li>
        <li>
          <Link
            to="/mostliked"
            className={`hover:text-gray-300 text-white mx-2 ${
              location.pathname === "/mostliked" ? "font-bold" : ""
            }`}
          >
            MostLiked
          </Link>
        </li>
        <li>
          <Link
            to="/mostcommented"
            className={`hover:text-gray-300 text-white mx-2 ${
              location.pathname === "/mostcommented" ? "font-bold" : ""
            }`}
          >
            MostCommented
          </Link>
        </li>
        <li>
          <Link
            to="/authors"
            className={`hover:text-gray-300 text-white ${
              location.pathname === "/authors" ? "font-bold" : ""
            }`}
          >
             Authorprofile
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex items-center lg:ml-4 justify-end">
      <Link
        to="/login"
        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium mr-2"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"
      >
        Signup
      </Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
