import styles from '../../../styles/statistics/Statistics.module.scss';

export interface LocationsList {
  dataArr: LocationItem[];
}
type LocationItem = {
  name?: string;
  count?: number;
  id?: string | number;
};

export default function LocationList({ dataArr }: LocationsList) {
  return (
    <>
      {dataArr.map(({ id, name, count }) => {
        return (
          <tbody key={id}>
            <tr className={styles.table__dataRow}>
              <td className={styles.table__item}>{name}</td>
              <td className={styles.table__item}>{count}</td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
