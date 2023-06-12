import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Menu from '../components/menu';
import Carousel from '../components/carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yudai04's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu active="home" />
      <main>
        <div className={styles.selfIntroduction}>
          <div className={styles.topName}>
            <img className={styles.topLogo} src="icon.jpg" />
          </div>
          <div className={styles.topName}>
            <h2>yudai04</h2>
            <h3>Chiba, Japan</h3>
          </div>
        </div>
        <div className={styles.aboutMe}>
          <h2>About Me</h2>
          <p>中学でロボコンに出場する部活動に入りロボットプログラミングや電子工作を学びました。</p>
          <p>また、同時期にBasic言語で簡易的なゲームやツール等を作成し、Windows上でのGUI開発を学びました。</p>
          <p>高校では文化祭でApacheを使用したWebサーバー運用の知識も携えました。</p>
          <p>現在は大学で情報系を専攻し、フロントエンドを中心にデジタルアートやゲーム開発、電子工作などを行っています。</p>
        </div>
        <div className={styles.aboutMe}>
          <h2>Works</h2>
          詳細は<Link href="/works" className={styles.normalLink}>こちら</Link>のページをご覧ください。
          <Carousel />
        </div>
        <div className={styles.aboutMe}>
          <h2>Skills</h2>
          <p>HTML / CSS / JavaScript / TypeScript /  React / Next.js / Node.js / SQL / Python / C / PHP / Java / Unity / Photoshop / Illustrator / Premiere Pro / After Effects</p>
        </div>
        <div className={styles.aboutMe}>
          <h2>所属</h2>
          <p>芝浦工業大学 工学部情報工学科</p>
          <p><a className={styles.normalLink} href="https://shibalab.com">ShibaLab</a></p>
          <p><a className={styles.normalLink} href="https://digicre.net">デジクリ</a></p>
        </div>
        <div className={styles.aboutMe}>
          <h2>自己紹介スライド</h2>
          <div className={styles.canvaDiv}>
            <iframe loading="lazy" className={styles.canvaIframe}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlMuGeCWA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
            </iframe>
          </div>
          
          <p>Link: <a className={styles.normalLink} href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlMuGeCWA&#x2F;view?utm_content=DAFlMuGeCWA&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">yudai04 | Self-Introduction</a></p>
          <p>made with <a className={styles.normalLink} href="canva.com">Canva</a></p>
        </div>
      

        <div className={styles.grid}>
          <Link href="/works" className={styles.card}>
            <h3>Works</h3>
            <p>過去に制作した作品などはこちら</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h3>Contact</h3>
            <p>各種連絡先はこちら</p>
          </Link>

          <a
            href="https://github.com/yudai1204"
            className={styles.card}
          >
            <h3>GitHub</h3>
            <p>私のGitHubレポジトリです</p>
          </a>

          <a
            href="https://crowdworks.jp/public/employees/4780926?ref=mypage_nav1_account"
            className={styles.card}
          >
            <h3>Request</h3>
            <p>
              CrowdWorksへのリンク
            </p>
          </a>
        </div>
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