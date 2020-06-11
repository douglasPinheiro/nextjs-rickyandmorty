import styles from './character-profile.module.css'
import Date from '../../components/date'
import { translateGender, translateStatus } from '../../lib/basic-translations'

export default function CharacterProfile({ character }) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={character.image}></img>
            <div className={styles.info}>
                <div className={styles.infodata}><b>Nome</b>: {character.name}</div>
                <div className={styles.infodata}><b>Espécie</b>: {character.species}</div>
                <div className={styles.infodata}><b>Sexo</b>: {translateGender(character.gender)}</div>
                <div className={styles.infodata}><b>Origem</b>: {character.origin.name}</div>
                <div className={styles.infodata}><b>Ultima vez visto em</b>: {character.location.name}</div>
                <div className={styles.infodata}><b>Status</b>: {translateStatus(character.status)}</div>
                {(character.type !== "") 
                    ? <div className={styles.infodata}><b>Tipo</b>: {character.type}</div>
                    : null
                }
                <div className={styles.infodata}><b>Registro criado</b>: <Date dateString={character.created} /></div>
                <hr />
                <div>
                    O(a) <b>{character.name}</b> aparece em <b>{character.episode.length}</b> episódio(s)
                </div>
            </div>
        </div>
    )
}