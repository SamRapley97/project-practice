import type { NextPage } from "next";
import Link from "next/link";
import Calculator from "./calculator";

const Home: NextPage = () => {
  return (
    <div>
      Hello
      <br></br>
      <Link href="/about">About us</Link>
      <Calculator left={4} operator={"+"} right={5} />
    </div>
  );
};

export default Home;
