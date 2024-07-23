import Registration from '@/modules/registration'
import Head from 'next/head'
import React from 'react'

function Signup() {
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Registration />
    </>
  )
}

export default Signup