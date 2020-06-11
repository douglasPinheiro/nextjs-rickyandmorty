import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home, returnPage }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={styles.title}>Lista de personagens do <img src="/images/Rick_and_Morty_logo.png" className={styles.imageTitle} /></a>
              </Link>
            </h2>
      </header>
      <main className={styles.main}>{children}</main>
      {!home && !returnPage && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Voltar para a home</a>
          </Link>
        </div>
      )}
      {!home && returnPage && (
        <div className={styles.backToHome}>
          <Link href="/[page]" as={'/' + returnPage}>
            <a>← Voltar para a home</a>
          </Link>
        </div>
      )}
    </div>
  )
}