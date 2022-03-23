import React, { MouseEvent } from 'react';
import { useState } from 'react';
import { CharactersList } from '../List';
import EpisodesList from './EpisodesList';
import styles from '../../../styles/statistics/Statistics.module.scss';
import ArrowsList from './ArrowsList';

export default function EpisodeTable({ items }: CharactersList) {
  const [rising, setRising] = useState(() => [...items]);
  const [descending, setDescending] = useState(() => [...items]);
  const [togler, setTogler] = useState('initial');

  const risingQuantity = (e: MouseEvent) => {
    e.preventDefault();
    const sortData = items.sort(
      (a, b) => a.episode?.length - b.episode?.length,
    );
    setTogler('rising');
    setRising(sortData);
  };

  const descendingQuantity = (e: MouseEvent) => {
    e.preventDefault();
    const sortData = items.sort(
      (a, b) => b.episode?.length - a.episode?.length,
    );
    setTogler('descending');
    setDescending(sortData);
  };

  return (
    <table className={styles.table__el}>
      <thead className={styles.table__head}>
        <tr className={styles.table__header}>
          <th className={styles.table__header}>Character name</th>
          <th className={styles.table__header}>
            <div className={styles.table__boxWithArrow}>
              Number of episodes
              {/* <ArrowsList
                risingQuantity={risingQuantity}
                descendingQuantity={descendingQuantity}
              /> */}
              <ul className={styles.arrows__list}>
                <li className={styles.arrows__item}>
                  <button
                    type="button"
                    className={styles.arrows__btn}
                    onClick={descendingQuantity}
                  >
                    &#x2193;
                  </button>
                </li>

                <li className={styles.arrows__item}>
                  <button
                    type="button"
                    className={styles.arrows__btn}
                    onClick={risingQuantity}
                  >
                    &#x2191;
                  </button>
                </li>
              </ul>
            </div>
          </th>
        </tr>
      </thead>
      {togler === 'initial' && <EpisodesList items={items} />}
      {togler === 'descending' && <EpisodesList items={descending} />}
      {togler === 'rising' && <EpisodesList items={rising} />}
      <tfoot className={styles.table__footer}>
        <tr>
          <></>
        </tr>
      </tfoot>
    </table>
  );
}
