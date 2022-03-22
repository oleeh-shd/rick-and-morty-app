import { useState } from 'react';
import { Item } from '../ListItem';
import { CharactersList } from '../List';
import styles from '../../../styles/statistics/Statistics.module.scss';

// type ArrName = [
//   {
//     name: string | undefined;
//     quantity: string[];
//   },
// ];

export default function LocationTable({ items }: CharactersList) {
  const [locations, setLocations] = useState([]);
  const uniq = items.map(el => {
    return { count: 1, name: el.location?.name };
  });
  // const arrLocation = uniq.reduce(function (acc, el) {
  //   acc[el.name] = (acc[el.name] || 0) + 1;
  //   return acc;
  // }, {});
  // console.log('arrLocation', arrLocation);

  // const charactersQuantity = items.reduce((prevItem, el) => {
  //   const { location } = el;
  //   if (location?.name) {
  //     prevItem[location?.name] = (prevItem[location?.name] || 0) + 1;
  //     return prevItem;
  //   }
  // }, {});
  // // console.log('locations', charactersQuantity);
  // const keys = Object.entries(charactersQuantity);
  // console.log(typeof keys);
  // setLocations([].push(keys));
  return (
    <table className={styles.table__el}>
      <thead className={styles.table__head}>
        <tr className={styles.table__header}>
          <th className={styles.table__header}>Location</th>
          <th className={styles.table__header}>
            <div className={styles.table__boxWithArrow}>
              {' '}
              Number of characters
              <ul className={styles.arrows__list}>
                <li className={styles.arrows__item}>
                  <button type="button" className={styles.arrows__btn}>
                    &#x2193;
                  </button>
                </li>
                <li className={styles.arrows__item}>
                  <button type="button" className={styles.arrows__btn}>
                    &#x2191;
                  </button>
                </li>
              </ul>
            </div>
          </th>
        </tr>
      </thead>
      {items.map(({ name, location, id }: Item) => {
        return (
          <tbody key={id} className={styles.table__body}>
            <tr className={styles.table__dataRow}>
              <td className={styles.table__item}>{location?.name}</td>
              <td className={styles.table__item}> {name}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
