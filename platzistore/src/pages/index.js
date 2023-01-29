import Head from "next/head";
import ProductList from "@containers/ProductList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Platzi Stordde</title>
      </Head>
      <ProductList />
    </>
  );
}
