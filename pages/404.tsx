import Link from 'next/link';
import styles from '../styles/CharacterPage.module.scss';
import MainContainer from '../src/components/MainContainer';

export default function Error() {
  return (
    <MainContainer title="Error page">
      <Link href="/">
        <a>
          <button type="button" className={styles.btn}>
            Home
          </button>
        </a>
      </Link>
      <h1>Something went wrong</h1>
    </MainContainer>
  );
}
