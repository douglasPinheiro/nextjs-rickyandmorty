import Head from 'next/head'
import Layout from '../components/layout/layout'
import CharacterCard from '../components/character-card/character-card';
import Pagination from '../components/pagination/pagination'
import { getPageList, getCharactersPage } from '../lib/rickandmorty'

export default function Page({ characters, pageCount, page }) {
    return (
        <Layout home>
            <Head>
                <title>Catalogo De personagens Rick and Morty</title>
            </Head>
            {characters.map(character => <CharacterCard key={character.id} character={character} page={page} />)}
            <Pagination pageCount={pageCount} current={page} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getPageList();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { characters, pageCount } = await getCharactersPage(params.page);

    return {
        props: {
            characters,
            pageCount,
            page: params.page
        }
    }
}