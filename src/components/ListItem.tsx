import Image from 'next/image';
import Link from 'next/link';

export interface Item {
  id: number;
  name: string;
  image: string;
  created?: string;
  episode: string[];
  gender?: string;
  species?: string;
  status?: string;
  url?: string;
  type?: string;
  location?: { name: string | undefined; url: string | undefined };
}

export const ListItem = ({ id, name, image }: Item) => {
  return (
    <li>
      <Link href={`/characters/${id}`}>
        <a style={{ fontSize: '20px' }}>
          {name}
          <Image
            src={image}
            width={'100px'}
            height={'100px'}
            alt={name}
          ></Image>
        </a>
      </Link>
    </li>
  );
};