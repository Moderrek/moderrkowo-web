import { Button, Tooltip, Typography } from '@material-tailwind/react';
import * as React from 'react';

import Faq from '@/components/Faq';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import Seo from '@/components/Seo';



export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Navbar />
      <section className="container mx-auto py-20 mt-20 lg:mt-40 bg-blue-gray-50 shadow-lg rounded-lg">
        <h1 className="text-3xl text-center text-amber-600 font-bold">Survival / Działki / Ekonomia</h1>
        <Typography className="text-center text-gray-600 mt-4">
          Serwer wystartował 05.05.2023r.
        </Typography>
        <p className='text-center text-gray-700 mt-4'>Adres serwera: <Tooltip content="Kliknij aby skopiować"><code className='inline-block bg-amber-200 p-1 rounded' onClick={() => navigator.clipboard.writeText('moderrkowo.pl')}>moderrkowo.pl</code></Tooltip></p>
        <p className='text-center text-gray-700 mt-4'>Wersja Minecraft: <code className="inline-block bg-amber-200 p-1 rounded">1.19.x</code></p>
        <div className="flex flex-row items-center justify-center sm:flex-row gap-6 mt-8 text-amber-600">
          <Tooltip content="Wesprzyj serwer Moderrkowo.PL i zakup rangę w naszym sklepie!">
            <Button variant='gradient' color='orange'>
              <a href='https://sklep.moderrkowo.pl/category/survival-ekonomia'>SK Sklep Survival</a>
            </Button>
          </Tooltip>
          <Tooltip content="Discord Moderrkowo">
            <a href="https://discord.gg/mBat5Gw2na">DC</a>
          </Tooltip>
          <Tooltip content="Twitter Moderrkowo">
            <a href="https://twitter.com/ModerrkowoPL">TW</a>
          </Tooltip>
          <Tooltip content="Facebook Moderrkowo">
            <a href="https://www.facebook.com/moderrkowo">FB</a>
          </Tooltip>
          <Tooltip content="Instagram Moderrkowo">
            <a href="https://instagram.com/moderrkowo/">IG</a>
          </Tooltip>
        </div>
      </section>

      <section id="vanilla" className="container mx-auto py-20 mt-10 lg:mt-20 bg-blue-gray-50 shadow-lg rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center text-green-600 font-bold">Moderrkowo Vanilla</h1>
        <Typography className="text-center text-gray-600 mt-4">
          Moderrkowo Vanilla to zwykły serwer Minecraft, który dodatkowo posiada <b>Logowanie</b>, <b>AntyLogout</b>, <b>Anty X-Ray</b>.
        </Typography>
        <p className="text-center text-gray-700 mt-4 text-3xl font-light">Już wystartował!</p>
        <p className='text-center text-gray-700 mt-4'>Adres serwera: <Tooltip content="Kliknij aby skopiować"><code className='inline-block bg-green-200 p-1 rounded' onClick={() => navigator.clipboard.writeText('vanilla.moderrkowo.pl')}>vanilla.moderrkowo.pl</code></Tooltip></p>
        <p className='text-center text-gray-700 mt-4'>Wersja Minecraft: <code className="inline-block bg-green-200 p-1 rounded">1.19.x</code></p>
        <Tooltip content="Porozmawiaj z nami na naszym Discordzie!">
          <a className='mt-4' href="https://discord.gg/mBat5Gw2na">
            <Button color="indigo" variant="gradient">DC Dołącz DISCORD</Button>
          </a>
        </Tooltip>
      </section>

      {/* <section className="py-20 mt-20 lg:mt-60 bg-blue-gray-50">
            <div className="container mx-auto">
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 id="cechy" className="text-3xl text-center text-amber-600">Czym cechuje się Moderrkowo?</h1>
                    <p className="text-center text-gray-600 mt-4">
                        Serwer posiada autorskie pluginy, mechaniki jak i kreatywne zadania u NPC'ów ze sklepami na spawnie!
                        Na serwerze funkcjonuje system działek. Jest przyjaźnie nastawiony dla każdego gracza, nawet dla tych którzy nie chcą prowadzić potyczek.
                    </p>
                </div>
                <div className="relative mt-20 lg:mt-24">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        <div className="flex flex-1 justify-center mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-xl shadow" src={zadania} alt="zadania"></img>
                        </div>
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-amber-600 text-4xl font-semibold">Questy</h1>
                            <p className="text-gray-700 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Zadania tekst</p>
                        </div>
                    </div>
                </div>
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                        <div className="flex flex-1 justify-center mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-xl shadow" src={poziomy} alt="poziomy"></img>
                        </div>
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-amber-600 text-4xl font-semibold">Poziomy</h1>
                            <p className="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Poziomy tekst</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

      <section className="py-20">
        <div className="container mx-auto">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 id="pomoc" className="text-3xl text-center text-amber-500">Pomoc FAQ</h1>
            <p className="text-center text-gray-600 mt-4">Tutaj znajdziesz odpowiedzi na często zadawane pytania. Jeżeli nie znajdziesz odpowiedzi na swój problem zadaj pytanie na naszym Discordzie.</p>
          </div>
          <div className="sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <Faq />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
