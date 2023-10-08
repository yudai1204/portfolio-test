import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/menu";
import Work from "../components/work";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yudai04's works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu active="home" />
      <main className={styles.main}>
        <h1>Works</h1>
        <div className={styles.workContainer}>
          <Work
            title="ScombZ Utilities"
            year="2022"
            lang="JavaScript"
            tags={[
              "JavaScript",
              "自主制作",
              "Git",
              "ブラウザ拡張機能",
              "複数人開発",
            ]}
            imgs={[
              "/utilities1.png",
              "/utilities2.png",
              "/utilities3.png",
              "/utilities4.png",
            ]}
            videos={[]}
            statement={
              <>
                弊学の学内ポータルサイト用のブラウザ拡張機能です。現在600名以上のアクティブユーザーがいます。
                <br />
                2023年度から学生ポータルサイトが一新され、以前に比べUI/UXが使いづらくなったと感じたため、それを修正するブラウザ拡張機能を作成し公開しました。
                <br />
                この拡張機能自体は私がJavaScriptの勉強を兼ねて1人で制作を開始しましたが、同じように使いにくいと感じた友人が途中で数名合流しGit開発に移行しました。
                <br />
                現在はNativeのJavaScriptで記述されていますが、今年度中にReactおよびTypeScriptを用いて同じ機能を再実装し、保守性を高める予定です。
              </>
            }
            links={[
              {
                title: "GitHub",
                url: "https://github.com/yudai1204/ScombZ-Utilities",
              },
              {
                title: "公式サイト",
                url: "https://yudai1204.github.io/ScombZ-Utilities/index.html",
              },
              {
                title: "Chrome Web Store",
                url: "https://chrome.google.com/webstore/detail/scombz-utilities/iejnanaabfgocfjbnmhkfheghbkanibj?hl=ja",
              },
            ]}
          />
          <Work
            title="Bingo App"
            year="2023"
            lang="TypeScript / Next.js"
            tags={["React", "Next.js", "TypeScript", "ハッカソン", "Three.js"]}
            imgs={[]}
            videos={["Il3rgj9Lo7g"]}
            statement={
              <>
                <p>NASA Space Apps Challenge 2023 横浜大会優勝作品</p>
                <p>
                  2初出場のハッカソンで、2日間で作り上げました。同じく初出場メンバー計4人でチームを作成し、リーダーとして環境構築からコーディング、レビューまで行いました。世界大会に出場します。
                </p>
              </>
            }
            links={[
              {
                title: "Web App",
                url: "https://nasa-hackathon-2023-yokohama.vercel.app/",
              },
              {
                title: "Video",
                url: "https://www.youtube.com/watch?v=Il3rgj9Lo7g",
              },
              {
                title: "GitHub",
                url: "https://github.com/yudai1204/nasa-hackathon-2023-yokohama",
              },
            ]}
          />
          <Work
            title="Bingo App"
            year="2023"
            lang="TypeScript / Next.js"
            tags={["React", "Next.js", "TypeScript", "個人開発"]}
            imgs={["/bingoapp.png"]}
            videos={[]}
            statement={
              <>
                サークルの親睦会での使用を目的として、Chakra
                UIを使って1時間程度で作成しました。
              </>
            }
            links={[
              {
                title: "Web App",
                url: "https://bingoapp-shibalab.vercel.app/",
              },
              {
                title: "GitHub レポジトリ",
                url: "https://github.com/yudai1204/bingo-counter",
              },
            ]}
          />
          <Work
            title="GoogleDrive Uploder(仮)"
            year="2022"
            lang="Google Apps Script"
            tags={["GAS", "クラウドソーシング", "個人開発"]}
            imgs={["/googleup1.png"]}
            videos={[]}
            statement={
              <>
                Googleアカウントを持っていなくてもGoogleドライブ上にアップロードできるGASアプリケーションです。
                <br />
                クラウドソーシングサイトでの依頼で提案、作成しました。
                <br />
                Googleアカウントでログインできない端末から動画をアップロードするのですが、事前にGoogleフォームに回答をしてもらい、フォームに記載されたメールアドレスにuuidを含ませたURLを送信することによってアップロード者の識別を図りセキュリティ上の問題を解決しています。
              </>
            }
            links={[]}
          />
          <Work
            title="AI返信Bot"
            year="2023"
            lang="Python / AWS"
            tags={[
              "Python",
              "Flask",
              "MySQL",
              "AWS",
              "EC2",
              "RDS",
              "ChatGPT",
              "LINE Messaging API",
              "クラウドソーシング",
              "個人開発",
            ]}
            imgs={["/line_bot.jpg"]}
            videos={[]}
            statement={
              <>
                LINE Messaging API及びChatGPTを用いた自動返信Botです。
                <br />
                LlamaIndexというライブラリを用い、事前に設定した知識情報をもとに返信することができ、ChatGPTの制限よりも多いデータ数を読み込ませることができるためオリジナルの返信をすることができます。
                <br />
                今回は依頼元クリニックのデータと医療データを大量に読み込み、医療に関する質問に答えることができるようにしました。
                <br />
                DBに会話履歴を保存しAPIに送信することで会話の流れを読んだ回答をすることができます。
                <br />
                サーバーはAWS EC2 (Apache)、DBにはAWS RDSを使用しPython
                FlaskでAPIを作成しました。
                <br />
                読み込ませるデータ量を増やしたり、プロンプトを変更することでより精度を高められます。
              </>
            }
            links={[
              {
                title: "GitHub レポジトリ",
                url: "https://github.com/yudai1204/LlamaIndex-LineBot",
              },
            ]}
          />
          <Work
            title="文化祭ステージ企画"
            year="2019"
            lang="PHP / HTML / CSS / HSP3 / GCP"
            tags={["PHP", "GCP", "GCE", "MySQL", "Linux", "CentOS", "HSP3"]}
            imgs={["/bunkasai.png"]}
            videos={[]}
            statement={
              <>
                GCP無料枠を使い、Google Compute
                Engine上にApacheサーバーを立てて運営。
                <br />
                ドメイン取得、SSL化、PHPインストールからコーディングまでシステム全般を担当。
                <br />
                また、プロジェクター3台を制御する自作プログラムを作成(HSP3)。
                <br />
                スマホのカメラを生中継したり動画を再生したりを手元のコンピューターから制御。
                <br />
                ニコニコ動画のようなコメントスクリーンシステムを制作したが、スマホが基本的に禁止のため本番では実現しなかった。
              </>
            }
            links={[]}
          />
          <Work
            title="ScombZ Status Bot"
            year="2023"
            lang="Python"
            tags={["Python", "Linux", "個人開発"]}
            imgs={["/statusbot1.png"]}
            videos={[]}
            statement={
              <>
                学生ポータルサイトScombZの障害情報と、弊学情報課からのお知らせを報告するBotです。
                <br />
                情報化からのお知らせには通知がないため、SNSで情報を発信することにより多くの人に伝えます
                <br />
                Twitter
                APIの有料化に伴ってなにが無料版でできるのかを確認したく制作しました。
              </>
            }
            links={[
              {
                title: "Bot Link",
                url: "https://twitter.com/scomb_z",
              },
            ]}
          />
          <Work
            title="みんなで作る花火大会"
            year="2022"
            lang="p5.js / PHP"
            tags={[
              "JavaScript",
              "p5.js",
              "PHP",
              "インタラクティブアート",
              "ShibaLab",
            ]}
            imgs={["/hanabi1.png"]}
            videos={["EVCMPWxUo2k"]}
            statement={
              <>
                学祭に向けShibaLabで発表したインタラクティブアート作品です。
                <br />
                タブレットやスマートフォンで描いた絵がその場で花火となって打ちあがるという作品です。
                <br />
                打ち上げられている作品はだれかが今まで描いたもので、世界に1つしかない花火を作れます。
              </>
            }
            links={[
              {
                title: "ShibaLab - works",
                url: "https://shibalab.com/wp/portfolio/%e3%81%8a%e7%b5%b5%e3%81%8b%e3%81%8d%e6%89%93%e3%81%a1%e4%b8%8a%e3%81%92%e8%8a%b1%e7%81%ab/",
              },
            ]}
          />
          <Work
            title="Cat and Seek"
            year="2023"
            lang="Unity"
            tags={["Unity", "複数人開発", "インタラクティブアート", "ShibaLab"]}
            imgs={["/catandseek1.png"]}
            videos={["3c3dtXT7k1w"]}
            statement={
              <>
                学祭に向けShibaLabで発表したインタラクティブアート作品です。
                <br />
                Wiiリモコンを上下左右に動かすことによって、それをジャイロセンサーで読み取り目の前の空間にまるで懐中電灯で照らしているかのように映し出されます。
                <br />
                その中に隠れている猫を探し、餌をあげることができるという作品です。
              </>
            }
            links={[
              {
                title: "ShibaLab - works",
                url: "https://shibalab.com/wp/works/",
              },
            ]}
          />
          <Work
            title="ShibaLab Webサイト"
            year="2022"
            lang="HTML / CSS / JavaScript"
            tags={["JavaScript", "HTML", "CSS", "個人開発", "ShibaLab"]}
            imgs={["/shibalabWeb.png"]}
            videos={[]}
            statement={
              <>
                自身が所属するメディアアート制作サークルのホームページを作成しました。
                <br />
                デザインからコーディングまでを1人で行いました。
              </>
            }
            links={[
              {
                title: "ShibaLab",
                url: "https://shibalab.com",
              },
            ]}
          />
          <Work
            title="bolide for Chrome"
            year="2023"
            lang="JavaScript"
            tags={[
              "JavaScript",
              "デジクリ",
              "Git",
              "ブラウザ拡張機能",
              "個人開発",
            ]}
            imgs={["/bolide.jpg"]}
            videos={[]}
            statement={
              <>
                ニコニコ動画のように画面にコメントを流すソフトウェアであるBolideのブラウザ拡張機能版を1日で制作しました。
                <br />
                bolide自体は私の所属するサークルであるデジクリ内で開発されたソフトウェアです。
              </>
            }
            links={[
              {
                title: "bolide - GitHub",
                url: "https://github.com/SIT-DigiCre/bolide",
              },
            ]}
          />
          <Work
            title="ポートフォリオサイト"
            year="2023"
            lang="Next.js / React"
            tags={[
              "Next.js",
              "React",
              "JavaScript",
              "GitHub Pages",
              "個人開発",
            ]}
            imgs={["/portfolio.png"]}
            videos={[]}
            statement={
              <>
                このWebサイトです。Next.jsで開発し、GitHub
                Pagesにデプロイされています。
              </>
            }
            links={[
              {
                title: "GitHubレポジトリ",
                url: "https://github.com/yudai1204/portfolio-test",
              },
            ]}
          />
          <Work
            title="学バス アプリ(モック)"
            year="2023"
            lang="Figma"
            tags={["Figma", "デザイン"]}
            imgs={["/bus.jpg"]}
            videos={[]}
            statement={
              <>
                Figmaで大学⇔駅間のバスの時刻表を表示するアプリのモックを作成しました。
                <br />
                直感的に大学発と駅発を変更させたり、埼玉特有の真夏の強い日差しであっても見やすくなるように、色やコントラストを工夫しました。
                <br />
                TypeScript / Next.jsで実装する予定です。
              </>
            }
            links={[
              {
                title: "Figma",
                url: "https://www.figma.com/file/dfHfkoQ8BzfSO2qju5U3tx/bus-app?type=design&node-id=0-1&mode=design",
              },
            ]}
          />
          <Work
            title="サークル紹介スライド"
            year="2023"
            lang="Canva"
            tags={["Canva", "デザイン", "スライド"]}
            imgs={["/ap.jpg"]}
            videos={[]}
            statement={
              <>
                Canvaを使い所属するサークルShibaLabの紹介スライドを作成しました。
                <br />
                光と色を使うサークルなので、フォントにもこだわり透明感にこだわったデザインにしました。
              </>
            }
            links={[
              {
                title: "Canva",
                url: "https://www.canva.com/design/DAFmn-FRuJw/jpsbah0-hj6CPfFsHIqHAA/view?utm_content=DAFmn-FRuJw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
              },
            ]}
          />
          <Work
            title="ShibaLab 紹介動画"
            year="2023"
            lang="AviUtl"
            tags={["AviUtl", "ShibaLab"]}
            imgs={[]}
            videos={["C2-YqtxBFP0"]}
            statement={<>新入生向けにサークル紹介動画を作成しました。</>}
            links={[
              {
                title: "YouTube - Future Radiance",
                url: "https://www.youtube.com/watch?v=C2-YqtxBFP0",
              },
            ]}
          />
          <Work
            title="文化祭ステージ企画"
            year="2019"
            lang="PHP / HTML / CSS / HSP3 / GCP"
            tags={["PHP", "GCP", "GCE", "MySQL", "Linux", "CentOS", "HSP3"]}
            imgs={["/bunkasai.png"]}
            videos={[]}
            statement={
              <>
                GCP無料枠を使い、Google Compute
                Engine上にApacheサーバーを立てて運営。
                <br />
                ドメイン取得、SSL化、PHPインストールからコーディングまでシステム全般を担当。
                <br />
                また、プロジェクター3台を制御する自作プログラムを作成(HSP3)。
                <br />
                スマホのカメラを生中継したり動画を再生したりを手元のコンピューターから制御。
                <br />
                ニコニコ動画のようなコメントスクリーンシステムを制作したが、スマホが基本的に禁止のため本番では実現しなかった。
              </>
            }
            links={[]}
          />
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
          --swiper-theme-color: #cafa !important;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after,
        .swiper-pagination-bullet {
          filter: drop-shadow(2px 2px 3px #9999);
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
