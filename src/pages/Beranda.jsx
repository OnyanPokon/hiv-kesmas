import React from 'react';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi2';

function Beranda() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl min-h-screen px-6 py-24 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
            Layanan Cegah
            {' '}
            <span className="text-color-primary-500">HIV</span>
          </h1>
          <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Website panyedia layanan pencegahan penyebaran HIV. Visit, Screening
            HIV, Pendampingan Minum Obat, dan Edukasi HIV.
          </p>
          <div className="inline-flex">
            <Button size="lg" color="primary" pill>
              Eksplorasi
              <HiOutlineArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
          <div className="grid grid-flow-row md:grid-flow-col max-w-xl gap-4 mt-8">
            <div className="p-6 hover:bg-color-primary-500 hover:text-white transition-colors  w-full md:max-w-sm rounded-xl border-2 flex flex-col gap-y-2 border-color-primary-500 text-color-primary-500 ">
              <div className="inline-flex gap-x-2">
                <div className="rounded-full ">
                  <img src="/illustration/hero-icon-1.png" alt="" className="w-12" />
                </div>
                <p className="font-bold text-lg">Kenali HIV/AIDS lebih dekat</p>
              </div>
              <div className="text-sm">
                Gejala AIDS meliputi penurunan berat badan,
                demam atau keringat malam, dan kelelahan.
              </div>
            </div>
            <div className="p-6 hover:bg-color-primary-500 hover:text-white transition-colors  w-full md:max-w-sm  rounded-xl border-2 flex flex-col gap-y-2 border-color-primary-500 text-color-primary-500">
              <div className="inline-flex gap-x-2">
                <div className="rounded-full ">
                  <img src="/illustration/hero-icon-2.png" alt="" className="w-12" />
                </div>
                <p className="font-bold text-lg">Ayo cegah HIV/AIDS Bersama</p>
              </div>
              <div className="text-sm">
                Virus ini dapat ditularkan melalui
                kontak dengan darah yang terinfeksi.
              </div>
            </div>

          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/illustration/hero.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Beranda;
