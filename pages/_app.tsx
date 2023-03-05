import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";
import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      resources={[
        {
            name: "products",
            list: HeadlessInferencer,
            show: HeadlessInferencer,
            create: HeadlessInferencer,
            edit: HeadlessInferencer,
        },
      ]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
