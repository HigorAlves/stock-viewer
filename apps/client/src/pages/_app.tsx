import React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { JsonLd } from '~/components'
import { getHomeSchema } from '~/services/schema'
import { StoreProvider } from '~/store'
import StateInspectorComponent from '~/store/StateInspector'

import '~/assets/styles/reset.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap'
          rel='stylesheet'
        ></link>
        <title>Stock View NextJs</title>
        <JsonLd
          schema={getHomeSchema({
            title: 'NextJs Boilerplate',
            url: 'http://localhost:3000',
            description: 'Jetpack boilerplate for NextJS projects',
            socialSharingImage:
              'https://camo.githubusercontent.com/db3540f66c4d2170a1e9e4d504026cd387a58bd2/68747470733a2f2f692e696d6775722e636f6d2f7968775a5265782e706e67',
            headline: 'Jetpack boilerplate for NextJS projects'
          })}
        />
      </Head>
      <StateInspectorComponent>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </StateInspectorComponent>
    </>
  )
}

export default MyApp
