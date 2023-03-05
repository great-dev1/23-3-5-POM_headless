import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";
import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
