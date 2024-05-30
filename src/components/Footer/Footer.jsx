/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="grid grid-cols-12 gap-8 max-w-screen-xl mx-auto  p-8 lg:p-24">
        <div className="col-span-12 lg:col-span-4 flex items-center gap-x-2">
          <img src="/logo/kemendikbud.png" alt="" className="w-10 lg:w-16 " />
          <img src="/logo/ung.png" alt="" className="w-10 lg:w-16" />
          <img src="/images/avatar/km_white.png" alt="" className="w-10 lg:w-16" />
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-2">
          <h3 className="font-semibold text-sm lg:text-base"> Universitas Negeri Gorontalo</h3>
          <p className="text-xs lg:text-sm">Jl. Jend. Sudirmar, No.06 Kota Gorontalo</p>
          <p className="text-xs lg:text-sm">
            Laman:
            <a href="" className="underline text-color-primary-500">Something</a>
          </p>
          <p className="text-xs lg:text-sm">Email: @ung.ac.id</p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex items-center gap-4">
          <div className="inline-flex items-center gap-x-2">
            <a
              href="asasd"
              className="px-3 py-2.5 w-9 lg:w-12 lg:px-5 lg:py-4 bg-blue-500 text-white rounded-full inline-flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <span className="text-sm lg:text-base">Facebook</span>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <a
              href="asdasd"
              className="px-2 py-2.5 w-9 lg:px-4 lg:py-4 lg:w-12 bg-red-500 text-white rounded-full inline-flex items-center justify-center"
            >
              <FaYoutube />
            </a>
            <span className="text-sm lg:text-base">Youtube</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-300 flex items-center justify-center p-6">
        <p className="text-sm text-slate-500">© 2024, Universitas Negeri Gorontalo. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
