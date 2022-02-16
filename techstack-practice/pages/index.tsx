import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div >
        Hello
        <br></br>
     <Link href="/about">
       About us
     </Link>
   
    </div>
  )
}

export default Home
