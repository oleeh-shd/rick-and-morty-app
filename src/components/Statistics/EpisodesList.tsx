import { CharactersList } from '../List';
import { Item } from '../ListItem';
import styles from '../../../styles/statistics/Statistics.module.scss';

export default function EpisodesList({ items }: CharactersList) {
  return (
    <>
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
    </>
  );
}
