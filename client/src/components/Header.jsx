import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const path=window.location.pathname
  if(path.startsWith('/login' || path.startsWith('/register'))) return <></>;
    
// loginuser
// registerhr
// registeruser
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <div className="flex justify-between rounded-xl mx-1 mt-2 bg-blue-200 p-4 text-2xl font-sans">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-black py-2 mx-4 no-underline hover:text-gray-800"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black py-2 mx-4 no-underline hover:text-gray-800"
        >
          About Us
        </Link>
      </div>
      <div className="flex space-x-4">
        {token ? (
          <>
            <Link
              to="/profile"
              className="text-black py-2 mx-4 no-underline hover:text-gray-800">Profile</Link>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/loginuser"
              className="text-black mx-4 no-underline hover:text-gray-800"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
