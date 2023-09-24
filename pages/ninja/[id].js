import Head from 'next/head';

export const getStaticPaths = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();

   const paths = data.map(ninja => {
      return {
         params: { id: ninja.id.toString() }
      }
   })

   return {
      paths,
      fallback: false
   }
}

export const getStaticProps = async (context) => {
   const id = context.params.id;
   const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
   const data = await res.json();

   return {
      props: { ninja: data } // Changed 'ninjas' to 'ninja'
   }
}

const Details = ({ ninja }) => { // Accept 'ninja' as a prop
   return (
      <>
         <Head>
            <title>Ninja List | Details</title>
            <meta name="keywords" content="ninjas"></meta>
         </Head>
         <div>
            <h1>Details page!</h1>
            <p><b>Name: </b>{ninja.name}</p>
            <p><b>Email: </b>{ninja.email}</p>
            <p><b>Website: </b>{ninja.website}</p>
            <p><b>Address: </b>{ninja.address.city}</p>
         </div>
      </>
   );
}

export default Details;
