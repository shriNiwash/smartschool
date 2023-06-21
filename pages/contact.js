import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Head from 'next/head';

export default function contact() {
  return (
    <>
    <Head>
      <title>Contact US</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

    </Head>
    <Navbar />
    <div>
        <h1>Contact Page</h1>
    </div>
    <Footer />
    </>
  )
}
