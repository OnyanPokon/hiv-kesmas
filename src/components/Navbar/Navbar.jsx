import React, { useState } from 'react';
import { Button, Dropdown } from 'flowbite-react';
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
      <div className="w-full bg-white py-4 border-b-2 border-color-info-500">
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
            <ul className="flex items-center gap-10 text-color-info-500 text-lg">
              <li><Link to="/" className="font-bold text-base">Beranda</Link></li>

              <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => <li className="font-bold text-base hover:cursor-pointer">Layanan</li>}
              >
                <Dropdown.Item>
                  <Link to="/visit">Home Visit</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/screening">Screening</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/Pendampingan">Pendampingan</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/Edukasi">Edukasi HIV</Link>
                </Dropdown.Item>
              </Dropdown>
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
