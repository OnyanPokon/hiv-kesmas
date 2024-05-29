/* eslint-disable space-infix-ops */
/* eslint-disable no-shadow */
import { Button, Timeline } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiCalendar, HiCheck } from 'react-icons/hi2';

function Visit() {
  const [data, setData] = useState(null);

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
    window.location.href = `https://wa.me/081242219002?text=Hello%20saya%20${doctor.name}`;
  };
  return (
    <>
      <section className="bg-slate-100">
        <div className="grid max-w-screen-xl items-center min-h-screen px-6 py-24 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-cent er lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-color-info-500">
              Home Visit VCT
            </h1>
            <p className="max-w-xl mb-6 font-bold lg:mb-8 md:text-lg lg:text-3xl ">
              Bertemu dengan perawat ahli dibidangnya dan nikmati pelayanan atas
              keluhanmu
            </p>
            <Button pill color="primary" size="lg">
              Telusuri Sekarang
            </Button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/illustration/visit-hero.png"
              alt="mockup"
              className="w-7/8 h-7/8"
            />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto flex gap-2 py-24 px-8">
          <div className="w-full">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-color-info-500">Home Visit VCT</h2>
            <p className="max-w-lg text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda eius veritatis tempore alias perspiciatis fuga?
              Eaque quisquam esse tenetur omnis.
            </p>
          </div>
          <div className="w-full">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Pesan Paket Home Visit VCT</Timeline.Title>
                  <Timeline.Body>
                    Pilih perawat sesukamu, cek ketersediaan
                    perawat dan lakukan pemesanan melalui whatsapp admin
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Penjadwalan Home Visit</Timeline.Title>
                  <Timeline.Body>
                    Pesanan anda akan di proses oleh admin 1x24 jam,
                    dan admin akan mengatur penjadwalan untuk Home Visit VCT
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Title>Home Visit</Timeline.Title>
                  <Timeline.Body>
                    Setelah penjadwalan berhasil di setujui,
                    layanan Home Visit VCT siap di lakukan sesuai dengan jadwal yang disetujui
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </section>
      <section className="bg-slate-100">
        <div className="max-w-screen-xl mx-auto px-8 py-24 grid grid-cols-12 gap-8">

          <div className="w-full col-span-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-color-info-500">Pilih Paket</h2>
            <p className="max-w-lg text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda eius veritatis tempore alias perspiciatis fuga?
              Eaque quisquam esse tenetur omnis.
            </p>
          </div>
          <div className="col-span-6 w-full flex  gap-x-4">
            {data.home_visit.doctors.map((doctor) => (
              <div key={doctor.id} className="group flex flex-col gap-y-4 p-8 rounded-xl border border-slate-200 shadow-md bg-white w-full hover:text-white hover:bg-color-info-500 hover:scale-105 transition-all">
                <div className="relative w-full flex items-center justify-center mb-6">
                  <div className="absolute bg-white backdrop-blur-xl p-2 shadow-md rounded-full -translate-y-8 ">
                    <img src={`${doctor.img_url}`} alt="" className="rounded-full w-28 h-28" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-px text-sm">
                  Nama Dokter :
                  <span className="text-lg font-semibold">{doctor.name}</span>
                </div>
                <div className="flex flex-col gap-y-px text-sm">
                  Pendidikan :
                  <span className="text-lg font-semibold">{doctor.study}</span>
                </div>
                <div className="flex flex-col gap-y-2 text-sm">
                  Spesialis :
                  <span className="text-sm font-semibold py-2 px-4 bg-color-info-100 text-color-info-500 rounded-md w-full text-center">{doctor.specialist}</span>
                </div>
                <div className="flex flex-col gap-y-2 mt-6">
                  <span className="text-3xl  font-extrabold">{doctor.cost}</span>
                  <span className="text-sm font-semibold">
                    <s>{doctor.discount}</s>
                    {' '}
                  </span>
                  <div className="flex flex-col gap-y-2 mt-4">
                    {doctor.benefits.map((benefit) => (
                      <span className="inline-flex items-center gap-x-2">
                        <HiCheck />
                        {benefit.benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <Button className="w-full border border-slate-200 shadow-sm mt-6" color="white_info" onClick={() => handlePackage(doctor)}>
                    Booking IDR
                    {' '}
                    {doctor.cost}
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

export default Visit;
