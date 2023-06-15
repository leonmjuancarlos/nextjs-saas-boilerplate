"use client";

import { useSession } from "next-auth/react";
import LoaderSpinner from "./loaderspinner";

export const User = () => {

    // CLIENT-SIDE COMPONENT SESSION
  const { data: session, status } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      {status === 'authenticated' && <pre>{JSON.stringify(session)}</pre>}
      {status === 'loading' && <LoaderSpinner/>}
    {status === 'unauthenticated' && <pre>NO AUTENTICADO</pre>}
    </>
  );
};
