import React, { useRef } from 'react';
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
  const targetRef = useRef(null);

  // Fungsi untuk menggulir ke elemen yang dituju
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section className="bg-slate-100">
        <div className="grid max-w-screen-xl items-center min-h-screen px-8 py-24 pt-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-cent er lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-3xl leading-8 font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
              Ayo Cegah Penyebaran HIV Bersama
              {' '}
              <span className="text-color-primary-500">HIVisitScreen</span>
            </h1>
            <div className="inline-flex">
              <Button size="lg" color="primary" pill onClick={scrollToTarget}>
                Telusuri Sekarang
                <HiOutlineArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-flow-row md:grid-flow-col max-w-xl gap-4 mt-8">
              <div data-aos="fade-up" className="p-6 hover:bg-color-info-500 hover:text-white transition-colors  w-full md:max-w-sm rounded-xl border-2 flex flex-col gap-y-2 border-color-info-500 text-color-info-500 ">
                <div className="inline-flex gap-x-2 items-center">
                  <div className="rounded-full ">
                    <img src="/illustration/hero-icon-1.png" alt="" className="w-12" />
                  </div>
                  <p className="font-bold text-lg">Apa itu HIV ?</p>
                </div>
                <div className="text-xs font-semibold text-justify">
                  HIV (Human Immunodeficiency Virus) adalah virus yang menyerang
                  sistem kekebalan tubuh yang dapat melemahkan kemampuan
                  tubuh melawan infeksi dan penyakit.
                </div>
              </div>
              <div data-aos="fade-up" className="p-6 hover:bg-color-info-500 hover:text-white transition-colors  w-full md:max-w-sm  rounded-xl border-2 flex flex-col gap-y-2 border-color-info-500 text-color-info-500">
                <div className="inline-flex gap-x-2 items-center">
                  <div className="rounded-full ">
                    <img src="/illustration/hero-icon-2.png" alt="" className="w-12" />
                  </div>
                  <p className="font-bold text-lg">Apa itu AIDS</p>
                </div>
                <div className="text-xs font-semibold text-justify">
                  AIDS (Acquired Immune Deficiency Syndrome)
                  adalah kondisi di mana HIV sudah pada tahap
                  infeksi akhir. Ketika seseorang sudah mengalami AIDS,
                  tubuh tidak lagi memiliki kemampuan untuk melawan infeksi yang ditimbulkan.
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
              <img src="/illustration/Frame 12.png" alt="" className="w-4/5" />
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-col gap-y-2 w-full">
            <p className="text-white font-extrabold text-3xl lg:text-4xl">Mengapa Harus HIVisitScreen?</p>
            <p className="text-white text-sm lg:text-base font-semibold text-justify">
              Karena HIVisitScreen merupakan
              media pemberi layanan yang akurat dan lengkap mengenai HIV/AIDS
              dengan model platform modern yang inovatif, mudah digunakan,
              dapat diakses siapapun dan kapanpun serta terpercaya yang
              berkontribusi dalam mengakselerasi pertumbuhan ekonomi digital
              serta memastikan kehidupan yang sehat dan sejahtera bagi semua
              kalangan dengan tujuan bersama yaitu untuk Indonesia menuju three zero HIV/AIDS 2030.
            </p>
          </div>
          <div />
        </div>
      </section>
      <section className="bg-white " ref={targetRef}>
        <div className="py-24 px-8 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-2 text-2xl lg:text-4xl tracking-tight font-extrabold text-color-info-500">Apa yang Kami Tawarkan</h2>
            <p className="text-gray-500 text-sm lg:text-lg dark:text-gray-400">Fitur yang mungkin dapat membantu kamu mencegah penyebaran HIV </p>
          </div>
          <div className="space-y-20 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div data-aos="fade-up">
              <img
                src="/illustration/Frame 17.png"
                alt="mockup"
                className="w-20 h-20 mb-2"
              />
              <h3 className="mb-2 text-xl font-bold text-color-info-500">Home Visit VCT</h3>
              <p className="text-gray-500 dark:text-gray-400">Bertemu dengan perawat ahli dibidangnya dan nikmati pelayanan atas keluhanmu</p>
              <Button color="info" pill className="mt-4" onClick={() => navigate('/visit')}>
                Selengkapnya
              </Button>
            </div>
            <div data-aos="fade-up">
              <img
                src="/illustration/Frame 18.png"
                alt="mockup"
                className="w-20 h-20 mb-2"
              />
              <h3 className="mb-2 text-xl font-bold text-color-info-500">Screening HIV</h3>
              <p className="text-gray-500 dark:text-gray-400">Periksa dan cek kondisi tubuh agar terbebas dari paparan infeksi HIV</p>
              <Button color="info" pill className="mt-4" onClick={() => navigate('/screening')}>
                Selengkapnya
              </Button>
            </div>
            <div data-aos="fade-up">
              <img
                src="/illustration/Frame 19.png"
                alt="mockup"
                className="w-20 h-20 mb-2"
              />
              <h3 className="mb-2 text-xl font-bold text-color-info-500">Pendampingan Minum Obat</h3>
              <p className="text-gray-500 dark:text-gray-400">Para ahli siap mendampingi pengobatanmu sampai kondisimu membaik</p>
              <Button color="info" pill className="mt-4" onClick={() => navigate('/pendampingan')}>
                Selengkapnya
              </Button>
            </div>
            <div data-aos="fade-up">
              <img
                src="/illustration/Frame 20.png"
                alt="mockup"
                className="w-20 h-20 mb-2"
              />
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
