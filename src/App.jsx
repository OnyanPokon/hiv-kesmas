import React from 'react';
import { Flowbite } from 'flowbite-react';
import { Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import customTheme from './utils/customTheme';
import Navbar from './components/Navbar/Navbar';
import Visit from './pages/Visit';
import Screening from './pages/Screening';
import Pendampingan from './pages/Pendampingan';
import Edukasi from './pages/Edukasi';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/pendampingan" element={<Pendampingan />} />
        <Route path="/edukasi" element={<Edukasi />} />
      </Routes>
      <Footer />
    </Flowbite>
  );
}

export default App;
