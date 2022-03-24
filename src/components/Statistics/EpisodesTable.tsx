import { useState } from 'react';
import { CharactersList } from '../List';
import EpisodesList from './EpisodesList';
import styles from '../../../styles/statistics/Statistics.module.scss';
import ArrowsList from './ArrowsList';

export default function EpisodeTable({ items }: CharactersList) {
  const [rising, setRising] = useState(() => [...items]);
  const [descending, setDescending] = useState(() => [...items]);
  const [toggler, setToggler] = useState('initial');

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
      <ArrowsList
        buttonAction={handleChange}
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
