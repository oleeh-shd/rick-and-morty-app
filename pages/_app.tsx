import { useState, useMemo } from 'react';
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ContextData } from '../src/components/Context';
import { Item } from '../src/components/ListItem';

export interface CharactersList {
  items: Item[];
}

function MyApp({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState([]);
  const dataArr = useMemo(() => ({ items, setItems }), [items]);
  return (
    <ContextData.Provider value={dataArr}>
      <Component {...pageProps} />
    </ContextData.Provider>
  );
}

export default MyApp;
