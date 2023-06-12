import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Menu from '../components/menu';
import Work from '../components/work';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>yudai04's works</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu active="home" />
            <main>
                <h1>Works</h1>
                <Work />
            </main>

            <footer>
                <a className={styles.normalLink}
                    href="https://yudai04.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @2023 Copyright yudai04.dev
                </a>
            </footer>

            <style jsx>{`
        main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
        }   
        footer img {
            margin-left: 0.5rem;
        }
        footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
        }
        code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        `}</style>

            <style jsx global>{`
        html,
        body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
            box-sizing: border-box;
        }
        `}</style>
        </div>
    )
}
