import Head from "next/head"
import Link from "next/link"
import Styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();
   return { 
      props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
   return (
      <>
      <Head>
        <title>Ninja List | Ninja List</title>
        <meta name="keywords" content="ninjas"></meta>
     </Head>
      <div>
         <h1>All ninjas!</h1>
         {
            ninjas.map(ninja => (   
                  <Link href={'/ninja/' + ninja.id} key={ninja.id} className={Styles.single}>
                     <h3>{ninja.name}</h3>
                  </Link>
            ))
         }
      </div>
      </>
   )
}

export default Ninjas