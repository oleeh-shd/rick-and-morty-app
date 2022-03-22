import React, { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { Item } from '../ListItem';
import { CharactersList } from '../List';
import styles from '../../../styles/statistics/Statistics.module.scss';

// type Episode = string[];
export default function EpisodeTable({ items }: CharactersList) {
  const [episodesData, setEpisodesData] = useState(() => [...items]);
  //  ChangeEvent<HTMLInputElement>
  const descendingQuantity = (e: MouseEvent) => {
    e.preventDefault();
    const sortData = episodesData.sort(
      (a, b) => a.episode?.length - b.episode?.length,
    );

    setEpisodesData(sortData);
    console.log('episodesData возрастание', episodesData);

    return sortData;
  };

  const risingQuantity = (e: MouseEvent) => {
    e.preventDefault();
    const sortData = episodesData.sort(
      (a, b) => b.episode?.length - a.episode?.length,
    );

    setEpisodesData(sortData);
    console.log('episodesData', episodesData);
    return sortData;
  };

  return (
    <table className={styles.table__el}>
      <thead className={styles.table__head}>
        <tr className={styles.table__header}>
          <th className={styles.table__header}>Character name</th>
          <th className={styles.table__header}>
            <div className={styles.table__boxWithArrow}>
              Number of episodes
              <ul className={styles.arrows__list}>
                <li className={styles.arrows__item}>
                  <button
                    type="button"
                    className={styles.arrows__btn}
                    onClick={risingQuantity}
                  >
                    &#x2193;
                  </button>
                </li>

                <li className={styles.arrows__item}>
                  <button
                    type="button"
                    className={styles.arrows__btn}
                    onClick={descendingQuantity}
                  >
                    &#x2191;
                  </button>
                </li>
              </ul>
            </div>
          </th>
        </tr>
      </thead>

      {items.map(({ name, episode, id }: Item) => {
        return (
          <tbody key={id} className={styles.table__body}>
            <tr className={styles.table__dataRow}>
              <td className={styles.table__item}>{name}</td>
              <td className={styles.table__item}>{episode?.length}</td>
            </tr>
          </tbody>
        );
      })}
      <tfoot
        style={{
          backgroundColor: '#800000',
          height: '50px',
          borderTop: '0.2px solid yellow',
        }}
      >
        <tr></tr>
      </tfoot>
    </table>
  );
}
