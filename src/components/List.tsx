import { ListItem } from './ListItem';
import { Item } from './ListItem';
import styles from '../../styles/CharactersList.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface CharactersList {
  items: Item[];
}

const List = ({ items }: CharactersList) => {
  return (
    <ul className={styles.characters__list}>
      {items.map(({ id, name, image }) => {
        return <ListItem id={id} key={uuidv4()} name={name} image={image} />;
      })}
    </ul>
  );
};

export default List;
