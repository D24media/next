import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';

export default function contact() {
  return (
    <div className={styles.container}>
   <Layout title="Contact us">
<h1>Enquire Form</h1>
<Link href="/">
    <a>Home</a>
</Link>
</Layout>
     </div>
  )
}
