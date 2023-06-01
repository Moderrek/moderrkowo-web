import { NextPage } from "next";
import Router from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  console.log(data);

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/zaloguj');
  }, [status])

  if (status === 'authenticated') {
    return (<div>
      {JSON.stringify(data.user, null, 2)}
    </div>)
  }

  return <div>Loading</div>;
}

export default Protected;