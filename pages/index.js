import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus sint corrupti libero commodi temporibus illum voluptatibus assumenda reiciendis vero praesentium incidunt suscipit, cum veritatis repudiandae neque? A, at quaerat.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi praesentium enim debitis at minus eaque error veniam amet harum, laborum libero consequatur. Porro, adipisci sequi. At reiciendis repellat aliquam a?</p>
        <Link href="/ninja/ninjas" className={styles.btn}>
           See Ninja Listing
        </Link>
    </div>
    </>
  )
}
