import React from 'react';
import { Item } from '../components/CharactersList/ListItem';

interface ContextData {
  items: Item[];
  setItems: (data: Item[]) => void;
}

export const ContextData = React.createContext<ContextData>({
  items: [],
  setItems: () => {},
});
