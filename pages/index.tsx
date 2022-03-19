import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useInView from 'react-cool-inview';
import { baseURL } from '../src/service/fetchCharacters';
import MainContainer from '../src/components/MainContainer';
import Layout from '../src/components/Layout';
import List from '../src/components/List';
import styles from '../styles/container.module.scss';
import style from '../styles/Home.module.scss';
import { Item } from '../src/components/ListItem';

interface CharacterData {
  data: {
    info: {};
    results: [];
  };
}
type CharactersList = {
  prev: Item[];
};
const CharactersList = dynamic(() => import('../src/components/List'));

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: CharacterData = await axios.get(baseURL);

  return { props: { data } };
};

function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { results } = data;
  // const [showCharacters, setShowCharacters] = useState(false);
  const [characters, setCharacters] = useState([...results]);
  const [loadMore, setLoadMore] = useState(true);
  const [dataArr, setDataArr] = useState();
  const [page, setPage] = useState(1);

  const getMoreCharacters = async () => {
    const { data } = await axios.get(`${baseURL}/?page=${page}`);
    if (!data) {
      return console.error('something went wrong');
    }
    setCharacters(prev => [...prev, ...data.results]);
  };

  const pageIncrement = () => {
    if (page !== 42 && page > 41) {
      setPage(page + 1);
    } else {
      return;
    }
  };
  return (
    <>
      <MainContainer title="Main page">
        <Layout>
          <header className={style.header__section}>
            <h1 className={style.header__title}>Rick and Morty</h1>
          </header>
          <section className={styles.chracters__section}>
            <div className={styles.container}>
              <InfiniteScroll
                dataLength={characters.length}
                next={getMoreCharacters}
                onScroll={pageIncrement}
                scrollThreshold={'100%'}
                hasMore={loadMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
              >
                <List items={characters} />
              </InfiniteScroll>
            </div>
          </section>
        </Layout>
      </MainContainer>
    </>
  );
}

export default Home;
