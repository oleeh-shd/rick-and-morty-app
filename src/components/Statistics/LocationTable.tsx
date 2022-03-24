import { useState } from 'react';
import React from 'react';
import { CharactersList } from '../List';
import styles from '../../../styles/statistics/Statistics.module.scss';
import LocationList from './LocationList';
import ArrowsList from './ArrowsList';

export default function LocationTable({ items }: CharactersList) {
  const [rising, setRising] = useState([{}]);
  const [descending, setDescending] = useState([{}]);
  const [toggler, setToggler] = useState('initial');

  const locationCount = items.reduce(
    (acc: { [key: string]: number }, { location }) => {
      const { name } = location;

      if (acc[name] === undefined) {
        acc[name] = 1;
      } else {
        acc[name] += 1;
      }

      return acc;
    },
    {},
  );
  type locationObj = { name: string; count: number; id: string };

  const locationInfo: locationObj[] = Object.keys(locationCount).map(name => {
    return {
      name: name,
      count: locationCount[name],
      id: name,
    };
  });

  const HandleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'rising':
        const sortData = locationInfo.sort((a, b) => a.count - b.count);
        setRising(sortData);
        setToggler('rising');
        break;

      case 'descending':
        const sortDescending = locationInfo.sort((a, b) => b.count - a.count);
        setDescending(sortDescending);
        setToggler('descending');
        break;
    }
  };

  return (
    <table className={styles.table__el}>
      <ArrowsList
        ButtonAction={HandleChange}
        nameTitle={'Location'}
        numberTitle={'Number of characters'}
      />

      {toggler === 'initial' && <LocationList dataArr={locationInfo} />}
      {toggler === 'rising' && <LocationList dataArr={rising} />}
      {toggler === 'descending' && <LocationList dataArr={descending} />}

      <tfoot className={styles.table__footer}>
        <tr>
          <></>
        </tr>
      </tfoot>
    </table>
  );
}
