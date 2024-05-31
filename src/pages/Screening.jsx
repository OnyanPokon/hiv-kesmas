/* eslint-disable no-shadow */
import { Button, Timeline } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { HiCalendar, HiCheck } from 'react-icons/hi2';

function Screening() {
  const [data, setData] = useState(null);
  const targetRef = useRef(null);

  // Fungsi untuk menggulir ke elemen yang dituju
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/variables.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handlePackage = (doctor) => {
    const message = `*_Halo HIVCare Admin!_*
Saya ingin memesan layanan Screening HIV dengan detail berikut :
- ID Paket : ${doctor.id}
- Nama Paket : ${doctor.package_name}
- Perawat : ${doctor.name}
- Harga : ${doctor.cost} (diskon dari ${doctor.discount})`;

    window.location.href = `https://wa.me/6281242219002?text=${encodeURIComponent(
      message,
    )}`;
  };
  return (
    <>
      <section className="bg-slate-100">
        <div className="grid max-w-screen-xl items-center min-h-screen px-8 py-24 pt-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-cent er lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-color-info-500">
              Screening HIV
            </h1>
            <p className="max-w-xl mb-6 font-bold lg:mb-8 md:text-lg lg:text-2xl ">
              Periksa dan cek kondisi tubuh agar terbebas dari paparan infeksi HIV
            </p>
            <Button pill color="primary" size="lg" onClick={scrollToTarget}>
              Telusuri Sekarang
            </Button>
          </div>
          <div className="mt-16 lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/illustration/screening-hero.png"
              alt="mockup"
              className="w-7/8 h-7/8 "
            />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row  gap-y-12 gap-x-12 py-24 px-8">
          <div className="w-full">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-color-info-500">Screening HIV</h2>
            <p className="max-w-lg text-sm md:text-base font-semibold">
              Kini, lebih mudah bagi Anda untuk memastikan
              kesehatan dengan fitur baru kami untuk screening HIV.
            </p>
          </div>
          <div className="w-full">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Pesan Paket Screening HIV</Timeline.Title>
                  <Timeline.Body>
                    Pilih perawat sesukamu, cek ketersediaan
                    perawat dan lakukan pemesanan melalui whatsapp admin
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Penjadwalan Screening HIV</Timeline.Title>
                  <Timeline.Body>
                    Pesanan anda akan di proses oleh admin 1x24 jam,
                    dan admin akan mengatur penjadwalan untuk Screening HIV
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Screening HIV</Timeline.Title>
                  <Timeline.Body>
                    Setelah penjadwalan berhasil di setujui,
                    layanan Screening HIV siap di lakukan sesuai dengan jadwal yang disetujui
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </section>
      <section className="bg-slate-100" ref={targetRef}>
        <div className="max-w-screen-xl mx-auto px-8 py-24 grid grid-cols-12 ">
          <div className="w-full col-span-12 flex items-center flex-col justify-center mb-24">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-color-info-500">Pilih Paket</h2>
            <p className="max-w-lg text-sm md:text-base px-4 font-semibold text-center">
              Kami menyediakan berbagai pilihan paket yang dirancang
              untuk memenuhi berbagai kebutuhan dan preferensi Anda.
            </p>
          </div>
          <div className="col-span-12  w-full flex flex-col lg:flex-row md:px-24 gap-x-6 gap-y-24">
            {data.screening.accessor.map((accessor) => (
              <div key={accessor.id} className="group flex flex-col gap-y-4 p-8 rounded-xl border border-slate-200 shadow-md bg-white w-full hover:text-white hover:bg-color-info-500 hover:scale-105 transition-all">
                <div className="relative w-full flex items-center justify-center mb-12">
                  <div className="absolute bg-white backdrop-blur-xl p-2 shadow-md rounded-full -translate-y-8 ">
                    <img src={`${accessor.img_url}`} alt="" className="rounded-full w-28 h-28" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-px text-sm">
                  Nama Pemeriksa :
                  <span className="text-lg font-semibold">{accessor.name}</span>
                </div>
                <div className="flex flex-col gap-y-px text-sm">
                  Pendidikan :
                  <span className="text-lg font-semibold">{accessor.study}</span>
                </div>
                <div className="flex flex-col gap-y-2 mt-6">
                  <span className="text-3xl  font-extrabold">{accessor.cost}</span>
                  <span className="text-sm font-semibold">
                    <s>{accessor.discount}</s>
                    {' '}
                  </span>
                  <div className="flex flex-col gap-y-2 mt-4">
                    {accessor.benefits.map((benefit) => (
                      <span className="inline-flex items-center gap-x-2">
                        <HiCheck />
                        {benefit.benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <Button className="w-full border border-slate-200 shadow-sm mt-6" color="white_info" onClick={() => handlePackage(accessor)}>
                    Chat IDR
                    {' '}
                    {accessor.cost}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Screening;
