import MainContainer from '../src/components/MainContainer';
import style from '../styles/Home.module.scss';

export default function Error() {
  return (
    <MainContainer title="Error page">
      <h1 className={style.header__title}>Something went wrong</h1>
    </MainContainer>
  );
}
