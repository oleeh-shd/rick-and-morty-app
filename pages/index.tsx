import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { baseURL } from '../src/service/fetchCharacters';
import MainContainer from '../src/components/MainContainer';
import Layout from '../src/components/Layout';
import { Condition, List } from '../src/components/CharactersList/List';
import styles from '../styles/container.module.scss';
import style from '../styles/Home.module.scss';

interface CharacterData {
  data: {
    info: {};
    results: [];
  };
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: CharacterData = await axios.get(baseURL);
  return { props: { data } };
};

function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { results } = data;

  const [characters, setCharacters] = useState([...results]);
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(2);
  const [condition, setCondition] = useState<Condition>('idle');

  const getMoreCharacters = async () => {
    setCondition('pending');

    if (page < 41) {
      setPage(prev => {
        return prev + 1;
      });
    } else {
      return;
    }

    const { data } = await axios.get(`${baseURL}/?page=${page}`);

    if (!data) {
      setCondition('rejected');
      return console.error('something went wrong');
    }
    setTimeout(() => {
      setCharacters(prev => [...prev, ...data.results]);
    }, 2000);
    setCondition('resolved');
  };

  return (
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
              scrollThreshold={'100%'}
              hasMore={loadMore}
              loader={
                <div className={style.preloader}>
                  <BallTriangle color="yellow" height={100} width={90} />
                </div>
              }
              endMessage={
                <h4 className={style.header__title}>Nothing more to show</h4>
              }
            >
              <List items={characters} condition={condition} />
            </InfiniteScroll>
          </div>
        </section>
      </Layout>
    </MainContainer>
  );
}

export default Home;
