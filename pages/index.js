import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/menu";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yudai04's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="yudai04's portfolio" />
        <meta property="og:title" content="yudai04's portfolio" />
        <meta property="og:site_name" content="yudai04's portfolio" />
        <meta property="og:description" content="yudai04's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yudai04.dev/ogp.png" />
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
          <p>
            中学でロボコンに出場する部活動に入りロボットプログラミングや電子工作を学びました。
          </p>
          <p>
            また、同時期にBasic言語で簡易的なゲームやツール等を作成し、Windows上でのGUI開発を学びました。
          </p>
          <p>
            高校では文化祭でApacheを使用したWebサーバー運用の知識も携えました。
          </p>
          <p>
            現在は大学で情報系を専攻し、フロントエンドを中心にデジタルアートやゲーム開発、電子工作などを行っています。
          </p>
        </div>
        <div className={styles.blueBtnArea}>
          <Link className={styles.blueButton} href="/works">
            Works
          </Link>
          <a
            className={styles.blueButton}
            href="https://www.wantedly.com/id/yudai1204"
          >
            Wantedly
          </a>
        </div>
        <div className={styles.aboutMe}>
          <h2>Works</h2>
          詳細は
          <Link href="/works" className={styles.normalLink}>
            こちら
          </Link>
          のページをご覧ください。
          <Carousel />
        </div>
        <div className={styles.aboutMe}>
          <h2>Skills</h2>
          <div className={styles.skillDiv}>
            <h4>プログラミング言語</h4>
            <p>
              JavaScript / TypeScript / GAS / SQL / Python3 / C / PHP / Java /
              HSP3 / HTML / CSS / Ruby / C# / Processing / Arduino
            </p>
          </div>
          <div className={styles.skillDiv}>
            <h4>フレームワーク</h4>
            <p>
              React / Next.js / Node.js / Flask / numpy / Unity / Ruby on Rails
              / GraphQL
            </p>
          </div>
          <div className={styles.skillDiv}>
            <h4>インフラ環境</h4>
            <p>GCP - GCE / Firebase</p>
            <p>AWS - EC2 / RDS</p>
            <p>Apache / nginx / MySQL / Heroku</p>
          </div>
          <div className={styles.skillDiv}>
            <h4>ツール</h4>
            <p>
              Photoshop / TouchDesigner / Illustrator / Premiere Pro / After
              Effects / AviUtl / Figma / Canva
            </p>
          </div>
        </div>
        <div className={styles.aboutMe}>
          <h2>Award</h2>
          <p>NASA Space Apps Challenge 2023 横浜大会優勝</p>
        </div>
        <div className={styles.aboutMe}>
          <h2>所属</h2>
          <p>芝浦工業大学 工学部情報工学科</p>
          <p>株式会社AppBrew 開発インターン</p>
          <p>株式会社Nexceed 開発インターン</p>
          <p>カバー株式会社 開発インターン</p>
          <p>株式会社ウサギィ 開発アルバイト</p>
          <p>
            <a className={styles.normalLink} href="https://shibalab.com">
              ShibaLab
            </a>
          </p>
          <p>
            <a className={styles.normalLink} href="https://digicre.net">
              デジクリ
            </a>
          </p>
        </div>
        <div className={styles.aboutMe}>
          <h2>自己紹介スライド</h2>
          <div className={styles.canvaDiv}>
            <iframe
              loading="lazy"
              className={styles.canvaIframe}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlMuGeCWA&#x2F;view?embed"
              allowfullscreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>

          <p>
            Link:{" "}
            <a
              className={styles.normalLink}
              href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlMuGeCWA&#x2F;view?utm_content=DAFlMuGeCWA&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
              target="_blank"
              rel="noopener"
            >
              yudai04 | Self-Introduction
            </a>
          </p>
          <p>
            made with{" "}
            <a
              className={styles.normalLink}
              href="https://canva.com"
              target="_blank"
              rel="noopener"
            >
              Canva
            </a>
          </p>
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

          <a href="https://github.com/yudai1204" className={styles.card}>
            <h3>GitHub</h3>
            <p>私のGitHubレポジトリです</p>
          </a>

          <a
            href="https://crowdworks.jp/public/employees/4780926?ref=mypage_nav1_account"
            className={styles.card}
          >
            <h3>Request</h3>
            <p>CrowdWorksへのリンク</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          className={styles.normalLink}
          href="https://yudai04.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @2023 Copyright yudai04.dev
        </a>
      </footer>

      <style jsx global>{`
        :root {
          --swiper-theme-color: #fffa !important;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after,
        .swiper-pagination-bullet {
          filter: drop-shadow(2px 2px 3px #666);
        }
      `}</style>
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
  );
}
