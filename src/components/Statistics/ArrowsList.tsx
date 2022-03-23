import React, { MouseEventHandler, MouseEvent } from 'react';
import styles from '../../../styles/statistics/Statistics.module.scss';

export interface FunctionType {
  risingQuantity: MouseEventHandler<HTMLButtonElement>;
  descendingQuantity: MouseEventHandler<HTMLButtonElement>;
  // descendingQuantity: MouseEvent;
  // risingQuantity: MouseEvent;
}

export default function ArrowsList(
  { risingQuantity }: FunctionType,
  { descendingQuantity }: FunctionType,
) {
  return (
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
  );
}
