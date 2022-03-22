import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { baseURL } from '../../src/service/fetchCharacters';
import { Item } from '../../src/components/ListItem';
import styles from '../../styles/CharacterPage.module.scss';
import MainContainer from '../../src/components/MainContainer';

const btnClass = styles.btn + ' ' + styles.secondBtn;
type Param = {
  params: { id: number };
};

interface DataCharacter {
  data: Item;
}

export default function CharacterData({ data }: DataCharacter) {
  const { name, image, gender, species, status }: Item = data;

  return (
    <MainContainer title="Character page">
      <section className={styles.character__section}>
        <div className={styles.character__container}>
          <Link href="/">
            <a>
              <button type="button" className={styles.btn}>
                Home
              </button>
            </a>
          </Link>
          <Link href="/statistics">
            <a>
              <button type="button" className={btnClass}>
                Statistics
              </button>
            </a>
          </Link>

          <div className={styles.data__contentBox}>
            <div className={styles.data__thumb}>
              <Image
                className={styles.data__img}
                src={image}
                width={'250px'}
                height={'250px'}
                alt={name}
              ></Image>
            </div>

            <ul className={styles.data__list}>
              <li className={styles.data__item}>
                <p className={styles.data__name}>{name}</p>
              </li>
              <li className={styles.data__item}>
                <p className={styles.data__text}>{gender}</p>
              </li>
              <li className={styles.data__item}>
                <p className={styles.data__text}>{species}</p>
              </li>

              {status !== 'unknown' ? (
                <li className={styles.data__item}>
                  <p className={styles.data__text}> {status}</p>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(`${baseURL}`);

  const { results } = data;
  const pathsArr = results.map((el: Item) => {
    const stringID = String(el.id);
    return { params: { id: stringID } };
  });

  return {
    paths: pathsArr,
    fallback: true,
  };
}

export async function getStaticProps({ params }: Param) {
  const { data } = await axios.get(`${baseURL}/${params.id}`);
  return {
    props: {
      data,
    },
  };
}
