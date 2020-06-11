import axios from 'axios';
const basepath = 'https://rickandmortyapi.com/api/';

const returnToResultAndPage = result => {
    let characters = result.data.results;
    let pageCount = result.data.info.pages;

    return {
        characters,
        pageCount
    };
}

export async function getCharacters() {
    return returnToResultAndPage(await axios.get(`${basepath}character/`));
}

export async function getCharactersPage(page) {
    return returnToResultAndPage(await axios.get(`${basepath}character/?page=${page}`));
}

export async function getCharacter(id) {
    let result = await axios.get(`${basepath}character/${id}`);
    return result.data;
}

export async function getPageList() {
    const getResult = await axios.get(`${basepath}character/?page=1`);
    const pageCounter = getResult.data.info.pages;

    const pages = [];
    for (let i = 2; i <= pageCounter; i++) {
        pages.push(i.toString())
    }

    return pages.map(page => {
        return {
            params: {
                page
            }
        }
    })
}