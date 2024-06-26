/* eslint-disable no-shadow */
import { Button } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { HiCheck } from 'react-icons/hi2';

function Teman() {
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
Saya ingin memesan layanan Teman Sebaya dengan detail berikut :
- ID Paket : ${doctor.id}
- Nama Paket : ${doctor.package_name}
- Harga : ${doctor.cost} (diskon dari ${doctor.discount})`;

    window.location.href = `https://wa.me/6283840743617?text=${encodeURIComponent(
      message,
    )}`;
  };
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl items-center min-h-screen px-8 py-24 pt-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-cent er lg:col-span-7">
          <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-color-info-500">
            Temukan Teman Sebaya
          </h1>
          <p className="max-w-xl mb-6 font-bold lg:mb-8 md:text-lg lg:text-2xl ">
            Bebaskan ekspresimu bersama teman sebaya denganmu
          </p>
        </div>
        <div className="mt-16 lg:mt-0 lg:col-span-5 lg:flex lg:justify-center">
          {data.friends.friend.map((friend) => (
            <div data-aos="fade-left" key={friend.id} className="group max-w-sm flex flex-col justify-between p-8 rounded-xl border border-slate-200 shadow-md bg-white w-full hover:text-white hover:bg-color-info-500 hover:scale-105 transition-all">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-px text-sm">
                  <span className=" font-semibold">{friend.package_name}</span>
                </div>
                <div className="flex flex-col gap-y-2 mt-6">
                  <span className="text-3xl  font-extrabold">{friend.cost}</span>
                  <span className="text-sm font-semibold">
                    <s>{friend.discount}</s>
                    {' '}
                  </span>
                  <div className="flex flex-col gap-y-2 mt-4">
                    {friend.benefits.map((benefit) => (
                      <span className="inline-flex items-center gap-x-2">
                        <HiCheck />
                        {benefit.benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Button className="w-full border border-slate-200 shadow-sm mt-6" color="white_info" onClick={() => handlePackage(friend)}>
                  Chat
                  {' '}
                  {friend.cost}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teman;
