import 'react-loading-skeleton/dist/skeleton.css';
import { ListItem } from './ListItem';
import { Item } from './ListItem';
import styles from '../../../styles/CharactersList.module.scss';
const { v4: uuidv4 } = require('uuid');
export interface CharactersList {
  items: Item[];
  condition: Condition;
}
export type Condition = 'idle' | 'pending' | 'rejected' | 'resolved';
export const List = ({ items }: CharactersList) => {
  return (
    <ul className={styles.characters__list}>
      {items.map(({ id, name, image }) => {
        return <ListItem id={id} key={uuidv4()} name={name} image={image} />;
      })}
    </ul>
  );
};
