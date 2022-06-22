import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function Home() {
  return <h1>Hello word</h1>;
}

export const getServerSideProps = withPageAuthRequired();
