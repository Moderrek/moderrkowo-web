import { Button } from "@material-tailwind/react";
import Router from "next/router";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import Seo from "@/components/Seo";

export default function Zaloguj() {

  const [userInfo, setUserInfo] = useState({ name: '', password: '' });
  const [loginStatus, setLoginStatus] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoginStatus('');
    const res = await signIn('credentials', {
      name: userInfo.name,
      password: userInfo.password,
      redirect: false,
    });
    if (res?.status === 200) {
      Router.replace('/profil');
      return;
    }
    if (res?.error !== undefined) {
      if (res.error === 'Invalid Credentials') {
        setLoginStatus('Nieprawidłowe hasło!');
      }
      if (res.error === 'User Not Found') {
        setLoginStatus('Nieznaleziono gracza.')
      }
    }
  };

  return (
    <>
      <Seo templateTitle="Zaloguj się" />
      <Navbar />
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <NextImage
            useSkeleton={true}
            layout="image"
            width={64}
            height={64}
            className="mx-auto h-auto w-auto flex justify-center"
            src="/images/small-og.png"
            alt="Moderrkowo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Zaloguj się na konto Moderrkowo
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {loginStatus !== '' ? <p className="text-red-700 font-bold bg-red-100 rounded-xl text-center"><span className="p-2">{loginStatus}</span></p> : ''}

            <div>

              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nazwa z gry
              </label>
              <div className="mt-2">
                <input
                  value={userInfo.name}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="mcnick"
                  onChange={({ target }) => setUserInfo({ ...userInfo, name: target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Hasło z gry
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={userInfo.password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Button
                variant="gradient"
                color="amber"
                type="submit"
                className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Zaloguj się
              </Button>
            </div>

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Nie jesteś zarejestrowany?<br />
            <UnstyledLink href="/zagraj" className="font-semibold leading-6 text-amber-600 hover:text-amber-500">
              Dołącz na serwer Minecraft i zarejestruj się
            </UnstyledLink>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}