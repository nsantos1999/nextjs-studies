import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

type HomeProps = {
  time: string;
};

const Home = ({ time }: HomeProps) => {
  return (
    <main>
      <h1>Caching back-end consume</h1>
      <time dateTime={time}>{time}</time>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};

export default Home;
