import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';
import { baseURL } from '../src/service/fetchCharacters';
import MainContainer from '../src/components/MainContainer';
import Layout from '../src/components/Layout';
import List from '../src/components/List';

interface CharacterData {
  data: {
    info: {};
    results: [];
  };
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: CharacterData = await axios.get(baseURL);

  return { props: { data } };
};

function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { results } = data;

  return (
    <>
      <MainContainer title="Main page">
        <Layout>
          <h1>Main Page</h1>
          <List items={results} />
        </Layout>
      </MainContainer>
    </>
  );
}

export default Home;
