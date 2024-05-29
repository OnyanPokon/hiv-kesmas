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
    path: '/',
    text: 'Beranda',
  },
  {
    id: 2,
    path: '/visit',
    text: 'Visiti',
  },
  {
    id: 3,
    path: '/screening',
    text: 'Screening',
  },
  {
    id: 4,
    path: '/pendampingan',
    text: 'Pendampingan',
  },
  {
    id: 5,
    path: '/edukasi',
    text: 'Edukasi',
  },
  {
    id: 5,
    path: '/tentang',
    text: 'Tentang Kami',
  },
];
