import axios from 'axios';

export const baseURL = 'https://rickandmortyapi.com/api/character';
export const locationURL = 'https://rickandmortyapi.com/api/location';

const getCharacters = async () => {
  const { data }: CharacterData = await axios.get(baseURL);
  return { props: { data } };
};
export default getCharacters;
