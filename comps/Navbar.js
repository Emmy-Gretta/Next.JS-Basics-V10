import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
   return ( 
      <nav>
           <div className="logo">
           <Image src="/ninjanav.jpeg"  width={50}  height={50}/>
          </div>
         <Link href="/">Home</Link> 
         <Link href="/about">About</Link> 
         <Link href="/ninja/ninjas">Ninja Listing</Link> 
      </nav>
    );
}
 
export default Navbar;