import Link from 'next/link';
import Styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router'; 

const NotFound = () => {
const router = useRouter();

useEffect(() => {
   setTimeout(() => {
      router.push('/');
   }, 5000)
}, {})

   return ( 
      <div>
         <h1>Oooops.</h1>
         <h2>404</h2>
         <h3>Not Found</h3>
         <Link href="/" className={Styles.btn}>Back To Home</Link>
      </div>
    );
}
 
export default NotFound;