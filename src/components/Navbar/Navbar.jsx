import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';
import { navMenus } from './variables';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="font-Poppins w-full fixed z-10">
      <div className="w-full bg-white py-3 border-b-2 border-color-info-500">
        <div className="max-w-screen-xl bg-white mx-auto flex justify-between items-center px-6 z-10">
          <div>
            <ul className="flex lg:gap-2 items-center list-none">
              <li><img src="/logo/logo.png" alt="" className="w-12" /></li>
            </ul>
          </div>
          <Button color="info" onClick={openMenu} className="lg:hidden">
            <HiMenu />
          </Button>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8 text-color-info-500 text-lg">
              <li>
                <NavLink to="/" className={({ isActive }) => (`font-bold text-base ${isActive ? 'text-color-primary-500' : 'text-color-info-500'}`)}>
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink to="/visit" className={({ isActive }) => (`font-bold text-base ${isActive ? 'text-color-primary-500' : 'text-color-info-500'}`)}>
                  Home Visit
                </NavLink>
              </li>
              <li>
                <NavLink to="/screening" className={({ isActive }) => (`font-bold text-base ${isActive ? 'text-color-primary-500' : 'text-color-info-500'}`)}>
                  Screening
                </NavLink>
              </li>
              <li>
                <NavLink to="/pendampingan" className={({ isActive }) => (`font-bold text-base ${isActive ? 'text-color-primary-500' : 'text-color-info-500'}`)}>
                  Pendampingan
                </NavLink>
              </li>
              <li>
                <NavLink to="/edukasi" className={({ isActive }) => (`font-bold text-base ${isActive ? 'text-color-primary-500' : 'text-color-info-500'}`)}>
                  Edukasi HIV
                </NavLink>
              </li>
              <li>
                <NavLink to="/teman" className={({ isActive }) => (`font-bold text-base ${isActive ? 'text-color-primary-500' : 'text-color-info-500'}`)}>
                  Teman Sebaya
                </NavLink>
              </li>
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
    </nav>
  );
}

export default Navbar;
