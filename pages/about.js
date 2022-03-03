
import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';

export default function about() {
  return (
    <div className={styles.container}>
         <Layout title="NextDev about us">
        <title>NextDev We Create Apps.</title>
        <meta name="description" content="Next Development team is here to assist you in your app development from start to finish." />
        <link rel="icon" href="/favicon.ico" />
      
    <h1>about</h1>
    <p>NextDev</p>
    <Link href="/">
          <a>Home</a>
        </Link>

        </Layout>
    </div>
  )
}

