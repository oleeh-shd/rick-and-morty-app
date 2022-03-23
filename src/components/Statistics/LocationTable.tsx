import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { CharactersList } from '../List';
// import ArrowsList from './ArrowsList';
import styles from '../../../styles/statistics/Statistics.module.scss';
import LocationList from './LocationList';
import ArrowsList from './ArrowsList';

export default function LocationTable({ items }: CharactersList) {
  const [rising, setRising] = useState([{}]);
  const [descending, setDescending] = useState([{}]);
  const [togler, setTogler] = useState('initial');

  const risingQuantity = (e: MouseEvent) => {
    e.preventDefault();
    const sortData = locationInfo.sort((a, b) => a.count - b.count);

    setRising(sortData);

    setTogler('rising');
    return sortData;
  };

  const descendingQuantity = (e: MouseEvent) => {
    e.preventDefault();
    const sortData = locationInfo.sort((a, b) => b.count - a.count);

    setDescending(sortData);
    setTogler('descending');
    return sortData;
  };
  const locationObj = items.reduce((acc, { location }) => {
    const { name } = location;
    if (acc[name] === undefined) {
      acc[name] = 1;
    } else {
      acc[name] += 1;
    }

    return acc;
  }, {});

  type locationObj = { name: string; count: number; id: string };
  // type Count = { count: number };
  const locationInfo: locationObj[] = Object.keys(locationObj).map(name => {
    return {
      name: name,
      count: locationObj[name],
      id: uuidv4(),
    };
  });

  return (
    <table className={styles.table__el}>
      <thead className={styles.table__head}>
        <tr className={styles.table__header}>
          <th className={styles.table__header}>Location</th>
          <th className={styles.table__header}>
            <div className={styles.table__boxWithArrow}>
              Number of characters
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
      {togler === 'initial' && <LocationList dataArr={locationInfo} />}
      {togler === 'rising' && <LocationList dataArr={rising} />}
      {togler === 'descending' && <LocationList dataArr={descending} />}

      <tfoot className={styles.table__footer}>
        <tr>
          <></>
        </tr>
      </tfoot>
    </table>
  );
}
// DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
