import React from 'react';
import { Flowbite } from 'flowbite-react';
import Beranda from './pages/Beranda';
import customTheme from './utils/customTheme';

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Beranda />
    </Flowbite>
  );
}

export default App;
