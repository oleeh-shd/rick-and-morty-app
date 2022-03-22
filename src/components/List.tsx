import { ListItem } from './ListItem';
import { Item } from './ListItem';

export interface CharactersList {
  items: Item[];
}

export const List = ({ items }: CharactersList) => {
  return (
    <ul>
      {items.map(({ id, name, image, episode }) => {
        return (
          <ListItem
            id={id}
            key={id}
            name={name}
            image={image}
            episode={episode}
          />
        );
      })}
    </ul>
  );
};
