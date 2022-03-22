import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';
import Link from 'next/link';
import { baseURL } from '../src/service/fetchCharacters';
import styles from '../styles/statistics/Statistics.module.scss';
import btnStyles from '../styles/CharacterPage.module.scss';
import MainContainer from '../src/components/MainContainer';
import EpisodeTable from '../src/components/Statistics/EpisodesTable';
import LocationTable from '../src/components/Statistics/LocationTable';

const episodeTable = styles.table__wrapper + ' ' + styles.table__episode;
export default function Statistics({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { results } = data;

  return (
    <MainContainer title="Statistics page">
      <section className={styles.section}>
        <div className={styles.container}>
          <Link href="/">
            <a>
              <button type="button" className={btnStyles.btn}>
                Home
              </button>
            </a>
          </Link>
          <ul className={styles.table__box}>
            <li className={episodeTable}>
              <EpisodeTable items={results} />
            </li>
            <li className={styles.table__wrapper}>
              <LocationTable items={results} />
            </li>
          </ul>
        </div>
      </section>
    </MainContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: CharacterData = await axios.get(baseURL);

  return { props: { data } };
};
// var uniq = items
// .map(el => {
//   return { count: 1, name: el.location?.name };
// })
// .sort((a, b) => {
//   if (a.location?.name === b.location?.name) {
//     return { count: +1, name: a.location?.name };
//   }
//   // a[b.location?.name] = (a[b.location?.name] || 0) + b.count;
//   // return a;
// });
