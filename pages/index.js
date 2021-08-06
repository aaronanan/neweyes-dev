import Head from "next/head";
import Header from "@components/Header";
import Main from "@components/Main";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="">
      <Main />
      <Header />
      <Footer />
    </div>
  );
}
