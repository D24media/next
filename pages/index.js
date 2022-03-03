import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { API_URL } from "../config/index";
import NewsItem from "../components/NewsItem";

export default function Home({ news }) {
  return (
    <div className={styles.container}>
      <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>NextDev</h1>
        <p className={styles.description}>
          Blockchain Development <Link href="/about">
         D24 Media
        </Link>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>Decentralised &rarr;</h2>
            <p>Powered by Web3. Save on Transactions</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>Core Web Vital &rarr;</h2>
            <p>Improve your Search !</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h2>Socialise &rarr;</h2>
            <p>Discover and deploy host your own live stream.</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly help you deploy your business in the metaverse world.
            </p>
          </a>
        </div>
      </main>

  <h2>Latest News</h2>
  {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        {news.length > 0 && (
          <Link href="/news">
            <a className="btn-secondary">View All News</a>
          </Link>
        )} 
      </Layout>
    </div>
  )
}
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();

//   return {
//     props: { news },
//   };
// }

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();

//   return {
//     props: { news },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();

  return {
    props: { news: news.slice(0, 5) },
    revalidate: 1,
  };
}
 