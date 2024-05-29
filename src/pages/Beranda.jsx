import React from 'react';
import { Button } from 'flowbite-react';
import {
  HiBeaker,
  HiBookOpen,
  HiBriefcase,
  HiCheckCircle, HiOutlineArrowRight,
} from 'react-icons/hi2';
import { HiLocationMarker } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function Beranda() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-slate-100">
        <div className="grid max-w-screen-xl items-center min-h-screen px-8 py-24 pt-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-cent er lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-3xl leading-8 font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
              Ayo Cegah Penyebaran HIV Bersama
              {' '}
              <span className="text-color-info-600">HIVisitScreen</span>
            </h1>
            <div className="inline-flex">
              <Button size="lg" color="primary" pill>
                Telusuri Sekarang
                <HiOutlineArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-flow-row md:grid-flow-col max-w-xl gap-4 mt-8">
              <div className="p-6 hover:bg-color-info-500 hover:text-white transition-colors  w-full md:max-w-sm rounded-xl border-2 flex flex-col gap-y-2 border-color-info-500 text-color-info-500 ">
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
              <div className="p-6 hover:bg-color-info-500 hover:text-white transition-colors  w-full md:max-w-sm  rounded-xl border-2 flex flex-col gap-y-2 border-color-info-500 text-color-info-500">
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
            <img src="/illustration/hero-2.png" alt="mockup" className="w-7/8 h-7/8" />
          </div>
        </div>
      </section>
      <section className="bg-color-info-500">
        <div className="max-w-screen-xl mx-auto px-8 py-24 flex items-center gap-x-6">
          <div className="w-full hidden lg:block">
            <div className="relative">
              <img src="/illustration/hero-3.png" alt="" className="w-4/5" />
              <div className="absolute right-16 bottom-4 bg-white p-8 rounded-full shadow-lg">
                <img src="/illustration/hero-icon-1.png" alt="" className="w-24" />
              </div>
              <div className="p-6 text-lg bg-white text-color-info-500 font-bold rounded-xl absolute top-12 shadow-xl">
                <p>Stop🤚 HIV!!!</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <p className="text-white font-extrabold text-2xl lg:text-3xl">Gejala HIV/AIDS</p>
            <p className="text-white text-xs lg:text-sm">
              Gejala HIV/AIDS bervariasi tergantung pada tahap infeksi.
              HIV (Human Immunodeficiency Virus) adalah virus yang menyerang
              sistem kekebalan tubuh dan dapat menyebabkan AIDS
              (Acquired Immunodeficiency Syndrome) jika tidak diobati.
            </p>
            <div className="flex flex-col gap-y-2 font-semibold text-sm lg:text-base mt-4">
              <div className="flex flex-col gap-y-2 text-white">
                <div className="inline-flex gap-x-2">
                  <span className="text-white text-xl flex items-center">
                    <HiCheckCircle />
                  </span>
                  Demam
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-white">
                <div className="inline-flex gap-x-2">
                  <span className="text-white text-xl flex items-center">
                    <HiCheckCircle />
                  </span>
                  Pembengkakan Kelenjar Getah Bening
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-white">
                <div className="inline-flex gap-x-2">
                  <span className="text-white text-xl flex items-center">
                    <HiCheckCircle />
                  </span>
                  Sakit Tenggorokan
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-white">
                <div className="inline-flex gap-x-2">
                  <span className="text-white text-xl flex items-center">
                    <HiCheckCircle />
                  </span>
                  Ruam Kulit
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-white">
                <div className="inline-flex gap-x-2">
                  <span className="text-white text-xl flex items-center">
                    <HiCheckCircle />
                  </span>
                  Nyeri Otot Dan Sendi
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-white">
                <div className="inline-flex gap-x-2">
                  <span className="text-white text-xl flex items-center">
                    <HiCheckCircle />
                  </span>
                  Sakit Kepala Dan Kelelahan
                </div>
              </div>
            </div>
            <Button className="w-fit mt-4" pill color="primary" size="sm">
              Baca Selengkapnya
            </Button>
          </div>
          <div />
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-8 px-8 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-2 text-2xl lg:text-4xl tracking-tight font-extrabold text-color-info-500">Apa yang Kami Tawarkan</h2>
            <p className="text-gray-500 text-sm lg:text-lg dark:text-gray-400">Fitur yang mungkin dapat membantu kamu mencegah penyebaran HIV </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-info-100 lg:h-12 lg:w-12 bg-color-info-100 text-color-info-500">
                <HiLocationMarker />
              </div>
              <h3 className="mb-2 text-xl font-bold text-color-info-500">Home Visit VCT</h3>
              <p className="text-gray-500 dark:text-gray-400">Bertemu dengan perawat ahli dibidangnya dan nikmati pelayanan atas keluhanmu</p>
              <Button color="info" pill className="mt-4" onClick={() => navigate('/visit')}>
                Selengkapnya
              </Button>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-info-100 lg:h-12 lg:w-12 bg-color-info-100 text-color-info-500">
                <HiBriefcase />
              </div>
              <h3 className="mb-2 text-xl font-bold text-color-info-500">Screening HIV</h3>
              <p className="text-gray-500 dark:text-gray-400">Periksa dan cek kondisi tubuh agar terbebas dari paparan infeksi HIV</p>
              <Button color="info" pill className="mt-4" onClick={() => navigate('/screening')}>
                Selengkapnya
              </Button>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-info-100 lg:h-12 lg:w-12 bg-color-info-100 text-color-info-500">
                <HiBeaker />
              </div>
              <h3 className="mb-2 text-xl font-bold text-color-info-500">Pendampingan Minum Obat</h3>
              <p className="text-gray-500 dark:text-gray-400">Para ahli setia menememani kamu dan memberikan rekomendasi obat yang cocok dengan kondisimu</p>
              <Button color="info" pill className="mt-4" onClick={() => navigate('/pendampingan')}>
                Selengkapnya
              </Button>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-info-100 lg:h-12 lg:w-12 bg-color-info-100 text-color-info-500">
                <HiBookOpen />
              </div>
              <h3 className="mb-2 text-xl font-bold text-color-info-500">Edukasi HIV</h3>
              <p className="text-gray-500 dark:text-gray-400">Tambah pengetahuan tentang HIV agar semakin waspada dengan virus HIV</p>
              <Button color="info" pill className="mt-4" onClick={() => navigate('/edukasi')}>
                Selengkapnya
              </Button>
            </div>

          </div>
        </div>
      </section>
    </>

  );
}

export default Beranda;
