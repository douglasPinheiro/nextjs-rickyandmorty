import styles from './pagination.module.css'
import Link from 'next/link'
import Paginator from 'pagination'

export default function Pagination({ pageCount, current }) {
    const paginator = new Paginator.SearchPaginator({prelink:'/', current, rowsPerPage: 20, totalResult: 20 * pageCount});
    const pageData = paginator.getPaginationData();

    return (
        <div className={styles.container}>
            <Link href='/'>
                <a className={styles.item}>Primeiro</a>
            </Link>

            <Link href={(pageData.previous !== null ? '/[page]' : '/')} as={'/' + (pageData.previous !== null ? pageData.previous : '')}>
                <a className={styles.item}>&lt;</a>
            </Link>

            {pageData.range.map(item => (
                <PageRangeItem key={item} current={item} />
            ))}

            <Link href='/[page]' as={'/' + (pageData.nextpage === null ? Data.next : pageCount)}>
                <a className={styles.item}>></a>
            </Link>
            
            <Link href='/[page]' as={'/' + pageCount}>
                <a className={styles.item}>Ultimo</a>
            </Link>
        </div>
    )
}

function PageRangeItem(props) {
    if(props.current === 1) {
        return <Link href='/'>
            <a className={styles.item}>{props.current}</a>
        </Link>
    }

    return <Link href='/[page]' as={'/' + props.current}>
            <a className={styles.item}>{props.current}</a>
        </Link>
}