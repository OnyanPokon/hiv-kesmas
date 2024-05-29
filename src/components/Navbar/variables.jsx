/* eslint-disable react/jsx-filename-extension */
import {
  HiHome, HiInformationCircle, HiPhotograph,
} from 'react-icons/hi';
import React from 'react';

export const appMenus = [
  {
    id: 1,
    icon: <HiHome />,
    path: '/',
    text: 'Beranda',
  },
  {
    id: 2,
    icon: <HiInformationCircle />,
    path: '/schoolprofile',
    text: 'Profil',
  },
  {
    id: 3,
    icon: <HiPhotograph />,
    path: '/galery',
    text: 'Galeri',
  },
];

export const navMenus = [
  {
    id: 1,
    path: '/teachers',
    text: 'Guru dan tenaga pengajar',
  },
  {
    id: 2,
    path: '/vision',
    text: 'Visi dan misi',
  },
  {
    id: 3,
    path: '/academicinfo',
    text: 'Informasi akademik',
  },
  {
    id: 4,
    path: '/ppdb',
    text: 'PPDB',
  },
];
