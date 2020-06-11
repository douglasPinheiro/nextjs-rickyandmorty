import Head from 'next/head'
import Layout from '../../components/layout/layout'
import { getCharacter } from '../../lib/rickandmorty'
import CharacterProfile from '../../components/character-profile/character-profile'


export default function Character({ character, returnPage }) {
    return (
        <Layout returnPage={returnPage}>
            <Head>
                <title>{character.name}</title>
            </Head>
            <CharacterProfile character={character} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id;
    const returnPage = context.query.page;
    
    let character = await getCharacter(id);

    const props = {
        character
    }

    if (returnPage !== undefined) {
        props['returnPage'] = returnPage
    }

    return {
        props
    }
} 