import Head from 'next/head';
import React, { ReactNode } from 'react';

type Title = {
  title: string;
  children: ReactNode;
};

export default function MainContainer({ title, children }: Title) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>{children}</>
    </>
  );
}
