/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Avatar } from 'flowbite-react';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import {
  FaFacebookF, FaInstagram, FaMapPin, FaTiktok,
} from 'react-icons/fa';
import { HiMap } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="grid grid-cols-12 gap-8 max-w-screen-xl mx-auto  p-8 lg:p-24">
        <div className="col-span-12 lg:col-span-4 ">
          <div className="flex flex-col gap-y-2">
            <p className="mb-4">Merawat dengan sepenuh hati :</p>
            <Avatar.Group>
              <Avatar img="/profile/white/Frame 4.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 5.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 6.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 7.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 8.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 9.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 10.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 11.jpg" rounded stacked />
              <Avatar img="/profile/white/Frame 12.jpg" rounded stacked />
            </Avatar.Group>
          </div>
          <div className="flex flex-col gap-y-2 mt-4">
            <p className="font-bold">Waktu operasional</p>
            <div className="inline-flex items-center gap-x-2 font-semibold">
              <span className="p-1 bg-color-info-500 rounded-full">
                <HiCheck className="w-2 h-2 text-white rounded-full" />
              </span>
              Senin - Jumat : 9.00 - 19.00 WITA
            </div>
            <div className="inline-flex items-center gap-x-2 font-semibold">
              <span className="p-1 bg-color-info-500 rounded-full">
                <HiCheck className="w-2 h-2 text-white rounded-full" />
              </span>
              Sabtu: 8.00 - 16.00 WITA
            </div>
            <div className="inline-flex items-center gap-x-2 font-semibold">
              <span className="p-1 bg-color-info-500 rounded-full">
                <HiCheck className="w-2 h-2 text-white rounded-full" />
              </span>
              Minggu : Tutup
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 ">
          <div className="flex flex-col gap-y-2 mt-4">
            <p className="font-bold">Kontak Kami</p>
            <div className="inline-flex items-center gap-x-2 font-semibold">
              <span className="p-2 bg-green-500 rounded-full">
                <BsWhatsapp className="w-3 h-3 text-white rounded-full" />
              </span>
              0838
              {' '}
              4074
              {' '}
              3617
            </div>
            <div className="inline-flex items-center gap-x-2 font-semibold">
              <span className="p-2 bg-green-500 rounded-full">
                <BsWhatsapp className="w-3 h-3 text-white rounded-full" />
              </span>
              0823
              {' '}
              4980
              {' '}
              3664
            </div>
            <div className="inline-flex items-center gap-x-2 font-semibold">
              <span className="p-2 bg-red-500 rounded-full">
                <MdEmail className="w-3 h-3 text-white rounded-full" />
              </span>
              hivisitscreen5@gmail.com
            </div>
            <div className="inline-flex items-center gap-x-2 font-semibold">
              <span className="p-2 bg-red-500 rounded-full">
                <FaMapPin className="w-3 h-3 text-white rounded-full" />
              </span>
              <a href="https://maps.app.goo.gl/GZereyL4LFXKkwV3A">Link Map</a>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex items-center gap-x-2">
          <img src="/logo/kemendikbud.png" alt="" className="w-10 lg:w-16 " />
          <img src="/logo/ung.png" alt="" className="w-10 lg:w-16" />
          <img src="/logo/logo.png" alt="" className="w-10 lg:w-16" />
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-2">
          <h3 className="font-semibold text-sm lg:text-base"> Universitas Negeri Gorontalo</h3>
          <p className="text-xs lg:text-sm">Jl. Jend. Sudirman, No.06 Kota Gorontalo</p>
          <p className="text-xs lg:text-sm">
            Laman:
            {' '}
            <a href="https://hivisitscreen.id/" className="underline text-color-primary-500">hivisitscreen.id</a>
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
