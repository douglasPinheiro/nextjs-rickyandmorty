import styles from './character-card.module.css';
import Link from "next/link";

export default function CharacterCard({ character, page }) {
    return (
        <div className={styles.card}>
            <img className={styles.cardimage} src={character.image}></img>
            <div className={styles.cardContainer}>
                <div className={styles.cardname}><b>{character.name}</b></div>
                <CharacterStatus status={character.status} />
                <div className={styles.cardname}><b>Espécie:</b> {character.species}</div>
                <div className={styles.cardname}><b>Origem:</b> {character.origin.name}</div>
                
            </div>
            <Link href={{ pathname: '/characteres', query: { id: character.id, page } }}>
                <a className={styles.seeMore}>Ver detalhes</a>
            </Link>
        </div>
    )
}

function CharacterStatus(props) {
    if (!props.status) {
        return null;
    }

    return <div className={styles.status}>
        <div className={props.status === "Alive" ? styles.green : styles.red} />

        {props.status === "Alive" ?
            <div>Vivo</div> :
            <div><del>Morto</del></div>
        }
    </div>
}