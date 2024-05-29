import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { HiMenu, HiUser } from 'react-icons/hi';
import { appMenus, navMenus } from './variables';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="font-Poppins w-full fixed z-10">
      <div className="w-full bg-white py-4">
        <div className="max-w-screen-xl bg-white mx-auto flex justify-between items-center px-6 z-10">
          <div>
            <ul className="flex lg:gap-2 items-center list-none">
              <li><img src="/logo/logo.png" alt="" className="w-12" /></li>
            </ul>
          </div>
          <Button color="default" onClick={openMenu} className="lg:hidden">
            <HiMenu />
          </Button>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-10 text-color-primary-500">
              <li><Link to="/" className="font-semibold text-base">Beranda</Link></li>
              <li><Link to="/schoolprofile" className="font-semibold text-base">Profile</Link></li>
              <li><Link to="/galery" className="font-semibold text-base">Galeri</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`absolute w-full bg-white top-0 left-0 -z-10 pt-16 ${menuOpen ? '-translate-y-0' : '-translate-y-full'} transition-all duration-300`}>
        <ul className="flex items-start gap-1 flex-col p-4  text-color-primary-500 w-full">
          {navMenus.map((menu) => (
            <li className="w-full" key={menu.id}>
              <NavLink
                to={menu.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (`font-semibold text-xs block p-3 rounded-md ${isActive ? 'bg-color-primary-500 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'}`)}
              >
                {menu.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden fixed bottom-0 bg-white w-full p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <ul className="flex justify-around">
          {appMenus.map((menu) => (
            <li className="flex items-center flex-col gap-1" key={menu.id}>
              <NavLink
                to={menu.path}
                // className="flex items-center flex-col gap-1"
                className={({ isActive }) => (`flex items-center flex-col gap-1 ${isActive ? 'text-color-warning-500' : 'text-slate-400'}`)}

              >
                <span>{menu.icon}</span>
                <p className="text-xs">{menu.text}</p>
              </NavLink>
            </li>
          ))}
          <li className="flex items-center flex-col gap-1 text-slate-400">
            <Link to="/login" className="flex items-center flex-col gap-1">
              <span><HiUser /></span>
              <p className="text-xs">Masuk</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
