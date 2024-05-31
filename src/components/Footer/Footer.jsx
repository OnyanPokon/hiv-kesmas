/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  FaFacebookF, FaInstagram, FaTiktok, FaYoutube,
} from 'react-icons/fa';
import HistatsCounter from './HistatsCounter';

function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="grid grid-cols-12 gap-8 max-w-screen-xl mx-auto  p-8 lg:p-24">
        <div className="col-span-12 lg:col-span-4 flex items-center gap-x-2">
          <img src="/logo/kemendikbud.png" alt="" className="w-10 lg:w-16 " />
          <img src="/logo/ung.png" alt="" className="w-10 lg:w-16" />
          <img src="/logo/logo.png" alt="" className="w-10 lg:w-16" />
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-2">
          <h3 className="font-semibold text-sm lg:text-base"> Universitas Negeri Gorontalo</h3>
          <p className="text-xs lg:text-sm">Jl. Jend. Sudirmar, No.06 Kota Gorontalo</p>
          <p className="text-xs lg:text-sm">
            Laman:
            <a href="" className="underline text-color-primary-500">-</a>
          </p>
          <p className="text-xs lg:text-sm">Email: hivisitscreen5@gmail.com</p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex items-center gap-4">
          <div className="inline-flex items-center gap-x-2">
            <a
              href="https://www.facebook.com/share/qLw6H21SFheLGZUQ/?mibextid=qi2Omg"
              className="px-3 py-2.5 w-9 lg:w-12 lg:px-5 lg:py-4 bg-blue-500 text-white rounded-full inline-flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <a
              href="https://www.instagram.com/hivisitscreen_?igsh=dWl6dWt4a3BsbmV0"
              className="px-2 py-2.5 w-9 lg:px-4 lg:py-4 lg:w-12 bg-red-500 text-white rounded-full inline-flex items-center justify-center"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <a
              href="https://www.instagram.com/hivisitscreen_?igsh=dWl6dWt4a3BsbmV0"
              className="px-2 py-2.5 w-9 lg:px-4 lg:py-4 lg:w-12 bg-slate-900 text-white rounded-full inline-flex items-center justify-center"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="lg:col-span-3 flex items-center gap-4">
          <HistatsCounter></HistatsCounter>
        </div>
      </div>
      <div className="w-full bg-slate-300 flex items-center justify-center p-6">
        <p className="text-sm text-slate-500">
          © 2024,
          <a href="https://github.com/OnyanPokon">RfiqD</a>
          . All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
