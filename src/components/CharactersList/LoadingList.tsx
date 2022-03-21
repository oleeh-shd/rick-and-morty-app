import React, { ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CharactersList } from './List';
import styles from '../../../styles/CharactersList.module.scss';

const LoadingList = ({ items, condition }: CharactersList) => {
  return (
    <ul className={styles.characters__list}>
      {items.map(el => {
        {
          condition === 'pending' && (
            <li>
              <Skeleton
                variant="rectangular"
                width={210}
                height={210}
                animation="wave"
                duration={5.5}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};
export default LoadingList;
