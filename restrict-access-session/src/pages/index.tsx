import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return <></>;
};

export default Home;
