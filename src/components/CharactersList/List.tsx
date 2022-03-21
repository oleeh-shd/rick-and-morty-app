import 'react-loading-skeleton/dist/skeleton.css';
import { ListItem } from './ListItem';
import { Item } from './ListItem';
import styles from '../../../styles/CharactersList.module.scss';

export interface CharactersList {
  items: Item[];
  condition: Condition;
}
export type Condition = 'idle' | 'pending' | 'rejected' | 'resolved';
export const List = ({ items, condition }: CharactersList) => {
  return (
    <>
      <ul className={styles.characters__list}>
        {items.map(({ id, name, image }) => {
          return (
            <ListItem
              id={id}
              key={id}
              name={name}
              image={image}
              condition={condition}
            ></ListItem>
          );
        })}
      </ul>
    </>
  );
};
