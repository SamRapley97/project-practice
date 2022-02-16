import type { NextPage } from "next";
import Link from "next/link";
import Calculator from "./calculator";

const examples = (
  <>
    <Calculator left={1} operator="+" right={2} />
    <Calculator left={1} operator="-" right={2} />
    <Calculator left={1} operator="*" right={2} />
    <Calculator left={1} operator="/" right={2} />
  </>
);
const operations = {
  "+": (left: number, right: number): number => left + right,
  "-": (left: number, right: number): number => left - right,
  "*": (left: number, right: number): number => left * right,
  "/": (left: number, right: number): number => left / right,
};
type CalculatorProps = {
  left: number;
  operator: keyof typeof operations;
  right: number;
};
const Home: NextPage = () => {
  return (
    <div>
      Hello
      <br></br>
      <Link href="/about">About us</Link>
      <Calculator />
    </div>
  );
};

export default Home;
