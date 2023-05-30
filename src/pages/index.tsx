import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip, Typography } from '@material-tailwind/react';
import * as React from 'react';

import Faq from '@/components/Faq';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';



export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Navbar />
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <NextImage
            useSkeleton={false}
            layout="image"
            width={600}
            height={240}
            className="shadow-lg rounded align-middle border-none"
            src="/images/baner.png"
            alt="Moderrkowo"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-3 lg:mt-7">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-amber-600 text-5xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-bold">
            Moderrkowo.PL
          </h2>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            Najlepszy serwer Minecraft w Polsce. Zagraj w Minecraft na najlepszym trybie surwiwal!
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <Tooltip content="Wesprzyj serwer Moderrkowo.PL i zakup rangę w naszym sklepie!">
              <Button variant='gradient' color='orange'>
                <a href='https://sklep.moderrkowo.pl/category/survival-ekonomia'><FontAwesomeIcon icon={faStore} /> Sklep Survival</a>
              </Button>
            </Tooltip>
            <Tooltip content="Porozmawiaj z nami na naszym Discordzie!">
              <a href="https://discord.gg/mBat5Gw2na">
                <Button color="indigo" variant="gradient"><FontAwesomeIcon icon={faDiscord} /> Dołącz DISCORD</Button>
              </a>
            </Tooltip>
          </div>
        </div>
        <Tooltip content="Porozmawiaj z nami na naszym Discordzie!">
          <a href="https://discord.gg/mBat5Gw2na">


            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
              {/* <img className="hidden lg:block w-1/4 h-auto align-middle" src={bee} alt="baner" />
                 */}
              <iframe src="https://discord.com/widget?id=920374927733960774&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </a>
        </Tooltip>
      </div>
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
              <a href='https://sklep.moderrkowo.pl/category/survival-ekonomia'><FontAwesomeIcon icon={faStore} /> Sklep Survival</a>
            </Button>
          </Tooltip>
          <Tooltip content="Discord Moderrkowo">
            <a href="https://discord.gg/mBat5Gw2na"><FontAwesomeIcon icon={faDiscord} /></a>
          </Tooltip>
          <Tooltip content="Twitter Moderrkowo">
            <a href="https://twitter.com/ModerrkowoPL"><FontAwesomeIcon icon={faTwitter} /></a>
          </Tooltip>
          <Tooltip content="Facebook Moderrkowo">
            <a href="https://www.facebook.com/moderrkowo"><FontAwesomeIcon icon={faFacebook} /></a>
          </Tooltip>
          <Tooltip content="Instagram Moderrkowo">
            <a href="https://instagram.com/moderrkowo/"><FontAwesomeIcon icon={faInstagram} /></a>
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
            <Button color="indigo" variant="gradient"><FontAwesomeIcon icon={faDiscord} /> Dołącz DISCORD</Button>
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
