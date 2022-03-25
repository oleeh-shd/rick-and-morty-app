import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { BallTriangle } from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { baseURL } from '../src/service/fetchCharacters';
import MainContainer from '../src/components/MainContainer';
import Layout from '../src/components/Layout';
import { Condition, List } from '../src/components/CharactersList/List';
import styles from '../styles/container.module.scss';
import style from '../styles/Home.module.scss';
import btnStyle from '../styles/CharacterPage.module.scss';
import { ContextData } from '../src//components//Context';
import { Item } from '../src/components/ListItem';

export interface CharactersList {
  items: Item[];
}

const btnClass = btnStyle.btn + ' ' + btnStyle.secondBtn;

function Home() {
  const { items, setItems } = useContext(ContextData);
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(2);
  const [condition, setCondition] = useState<Condition>('idle');

  useEffect(() => {
    axios.get(baseURL).then(res => {
      if (items.length === 0) {
        const { data } = res;

        setItems(data.results);
      }
    });
  }, [items.length, setItems]);

  const getMoreCharacters = async () => {
    setCondition('pending');
    let localStorageKey = 'id';
    localStorage.setItem(localStorageKey, `${page}`);

    if (page < 41) {
      setPage(prev => {
        return prev + 1;
      });
    } else {
      return;
    }
    localStorage.setItem(localStorageKey, `${page}`);
    const getChangeId = Number(localStorage.getItem('id'));

    const { data } = await axios.get(`${baseURL}/?page=${getChangeId}`);

    if (!data) {
      setCondition('rejected');
      return console.error('something went wrong');
    }
    setTimeout(() => {
      setItems([...items, ...data.results]);
    }, 1000);
    scroll();
    setCondition('resolved');
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <MainContainer title="Main page">
      <Layout>
        <header className={style.header__section}>
          <h1 className={style.header__title}>Rick and Morty</h1>
        </header>
        <section className={styles.chracters__section}>
          <div className={styles.container}>
            <Link href="/statistics">
              <a>
                <button type="button" className={btnClass}>
                  Statistics
                </button>
              </a>
            </Link>
            <InfiniteScroll
              dataLength={items.length}
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
              <List items={items} condition={condition} />
            </InfiniteScroll>
          </div>
        </section>
      </Layout>
    </MainContainer>
  );
}

export default Home;
