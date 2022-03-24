import { useState } from 'react';
import { CharactersList } from '../List';
import EpisodesList from './EpisodesList';
import styles from '../../../styles/statistics/Statistics.module.scss';
import ArrowsList from './ArrowsList';

export default function EpisodeTable({ items }: CharactersList) {
  const [rising, setRising] = useState(() => [...items]);
  const [descending, setDescending] = useState(() => [...items]);
  const [toggler, setToggler] = useState('initial');

  const HandleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'rising':
        const sortData = items.sort(
          (a, b) => a.episode?.length - b.episode?.length,
        );
        setRising(sortData);
        setToggler('rising');
        break;

      case 'descending':
        const sortDescending = items.sort(
          (a, b) => b.episode?.length - a.episode?.length,
        );
        setDescending(sortDescending);
        setToggler('descending');
        break;
    }
  };
  return (
    <table className={styles.table__el}>
      {/* <thead className={styles.table__head}>
        <tr className={styles.table__header}>
          <th className={styles.table__header}>Character name</th>
          <th className={styles.table__header}>
            <div className={styles.table__boxWithArrow}>
              Number of episodes
              <ArrowsList ButtonAction={HandleChange} nameTitle={'Character name'}
        numberTitle={'Number of episodes'}/>
            </div>
          </th>
        </tr>
      </thead> */}
      <ArrowsList
        ButtonAction={HandleChange}
        nameTitle={'Character name'}
        numberTitle={'Number of episodes'}
      />
      {toggler === 'initial' && <EpisodesList items={items} />}
      {toggler === 'descending' && <EpisodesList items={descending} />}
      {toggler === 'rising' && <EpisodesList items={rising} />}
      <tfoot className={styles.table__footer}>
        <tr>
          <></>
        </tr>
      </tfoot>
    </table>
  );
}
