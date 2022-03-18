import { ListItem } from './ListItem';
import { Item } from './ListItem';

interface CharactersList {
  items: Item[];
}

const List = ({ items }: CharactersList) => {
  return (
    <ul>
      {items.map(({ id, name, image }) => {
        return <ListItem id={id} key={id} name={name} image={image} />;
      })}
    </ul>
  );
};

export default List;
