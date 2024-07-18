import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between rounded-xl mx-1 mt-2 bg-blue-200 p-4 text-2xl font-sans'>
      <div className="flex space-x-4">
        <Link to='/' className='text-black mx-4 no-underline hover:text-black'>Home</Link>
        <Link to='/about' className='text-black mx-4 no-underline hover:text-black'>About Us</Link>
      </div>
      <div className="flex space-x-4">
        <Link to='/loginuser' className='text-black mx-4 no-underline hover:text-black'>Login</Link>
        {/* <Link to='/loginhr' className='text-black mx-4 no-underline hover:text-black'>Login HR</Link> */}
        {/* <Link to='/registerhr' className='text-black mx-4 no-underline hover:text-black'>Register hr</Link>
        <Link to='/registeruser' className='text-black mx-4 no-underline hover:text-black'>Register user</Link> */}
      </div>
    </div>
  );
};

export default Header;