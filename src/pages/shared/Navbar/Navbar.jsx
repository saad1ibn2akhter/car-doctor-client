import React from 'react';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import p1 from '../../../assets/images/banner/1.jpg';
import p2 from '../../../assets/images/banner/2.jpg';
import p3 from '../../../assets/images/banner/3.jpg';
import p4 from '../../../assets/images/banner/4.jpg';
import p5 from '../../../assets/images/banner/5.jpg';

const Navbar = () => {
    const links =<>
    <li><Link>Home</Link></li>
    <li><Link>About</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link to='/'><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
     <button className='btn btn-outline btn-error'>Appointment</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;