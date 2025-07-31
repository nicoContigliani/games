"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';

const BingoScreen: NextPage = () => {


  return (
    <>
      <Head>
        <title>juegos</title>
        <meta name="description" content="Un juego simple hecho con Next.js" />
      </Head>

      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <Image
          src="/images/fondo.png"
          alt="hex bg"
          fill
          style={{ objectFit: 'cover', opacity: 0.99, zIndex: 0 }}
        />
      </main>
    </>
  );
};

export default BingoScreen;