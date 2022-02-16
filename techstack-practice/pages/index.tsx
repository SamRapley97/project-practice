import type { NextPage } from "next";
import Link from "next/link";
import Calculator from "./calculator";
import BlogPost from "../Components/BlogPost";
import Responce from "../Components/BlogResponce";


const Home: NextPage = () => {
  return (
    <div>
      Hello
      <br></br>
      <Link href="/about">About us</Link>
      <Calculator left={2} operator={'+'} right={3}/>
      <BlogPost/>
      
    </div>
  );
};

export default Home;
