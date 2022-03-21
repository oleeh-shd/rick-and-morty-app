import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/CharactersList.module.scss';
import { Condition } from './List';
import 'react-loading-skeleton/dist/skeleton.css';

export interface Item {
  id: number;
  name: string;
  image: string;
  created?: string;
  episode?: string[];
  gender?: string;
  species?: string;
  status?: string;
  url?: string;
  type?: string;
  location?: { key: string };
  condition: Condition;
}

export const ListItem = ({ id, name, image, condition }: Item) => {
  return (
    <>
      <li className={styles.characters__item}>
        <Link href={`/characters/${id}`}>
          <a className={styles.characters__link}>
            <div className={styles.characters__thumb}>
              <Image
                className={styles.characters__img}
                src={image}
                width={'210px'}
                height={'210px'}
                alt={name}
              ></Image>
            </div>

            <p className={styles.characters__text}>{name}</p>
          </a>
        </Link>
      </li>
    </>
  );
};
