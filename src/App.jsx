import React from 'react';
import { Flowbite } from 'flowbite-react';
import { Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import customTheme from './utils/customTheme';
import Navbar from './components/Navbar/Navbar';
import Visit from './pages/Visit';

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </Flowbite>
  );
}

export default App;
