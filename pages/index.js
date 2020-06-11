import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import CharacterCard from '../components/character-card/character-card';
import Pagination from '../components/pagination/pagination';
import { getCharacters } from '../lib/rickandmorty'

export async function getStaticProps() {
  const { characters, pageCount } = await getCharacters();

  return {
    props: {
      characters,
      pageCount
    }
  }
}

export default function Home({ characters, pageCount }) {
  return (
    <Layout home>
      <Head>
        <title>Catalogo De personagens Rick and Morty</title>
      </Head>
      {characters.map(character => <CharacterCard key={character.id} character={character} />)}
      <Pagination pageCount={pageCount} current={1} />
    </Layout>
  )
}