import React, { useEffect, useRef } from 'react';

function HistatsCounter() {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Buat elemen div untuk menampung widget
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'widget-container';

    if (widgetRef.current) {
      widgetRef.current.appendChild(widgetContainer);

      // Menambahkan elemen skrip pertama ke dalam widgetContainer
      const script1 = document.createElement('script');
      script1.id = '_waup3w';
      script1.innerHTML = 'var _wau = _wau || []; _wau.push(["dynamic", "zc0qutq8c3", "p3w", "c4302bffffff", "small"]);';
      widgetContainer.appendChild(script1);

      // Menambahkan elemen skrip kedua ke dalam widgetContainer
      const script2 = document.createElement('script');
      script2.src = '//waust.at/d.js';
      script2.async = true;
      widgetContainer.appendChild(script2);
    }

    // Membersihkan skrip saat komponen di-unmount
    return () => {
      if (widgetRef.current) {
        widgetRef.current.removeChild(widgetContainer);
      }
    };
  }, []);

  return (
    <div>
      {/* Konten komponen Anda */}
      <div ref={widgetRef} />
      {' '}
      {/* Kontainer untuk widget */}
      {/* Tambahkan elemen lain sesuai kebutuhan */}
    </div>
  );
}

export default HistatsCounter;
