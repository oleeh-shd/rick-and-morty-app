import React from 'react';
import styles from '../../../styles/statistics/Statistics.module.scss';

export interface Props {
  ButtonAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nameTitle: string;
  numberTitle: string;
}

export default function ArrowsList({
  ButtonAction,
  nameTitle,
  numberTitle,
}: Props) {
  return (
    <thead className={styles.table__head}>
      <tr className={styles.table__header}>
        <th className={styles.table__header}>{nameTitle}</th>
        <th className={styles.table__header}>
          <div className={styles.table__boxWithArrow}>
            {numberTitle}
            <ul className={styles.arrows__list}>
              <li className={styles.arrows__item}>
                <button
                  type="button"
                  className={styles.arrows__btn}
                  name="descending"
                  onClick={ButtonAction}
                >
                  &#x2193;
                </button>
              </li>

              <li className={styles.arrows__item}>
                <button
                  type="button"
                  className={styles.arrows__btn}
                  name="rising"
                  onClick={ButtonAction}
                >
                  &#x2191;
                </button>
              </li>
            </ul>
          </div>
        </th>
      </tr>
    </thead>
  );
}
