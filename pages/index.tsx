import axios from "axios";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { Filter } from "../components/filter";
import Header from "../components/header";
import { ProductDetails } from "../components/product-details";
import { ProductList } from "../components/product-list";
import styles from "../styles/home.module.css";
import { Product } from "../types/product";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageIndex = context.query['pageIndex'] || 1;
  const response = await axios.get<Product[]>(
    `https://opensheet.vercel.app/1f93_oo5mQM8sY1eg-HEz6JI3qzYSH1_y7wGWCN-fsB0/products!A${pageIndex}:J9`
  );

  return {
    props: {
      products: response.data,
    }
  };
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  data
) => {

  const [product, setProduct] = useState<Product>()

  return (
    <div className="app">
      <Head>
        <title>Cửa hàng - Shop.DefZone.Net</title>
        <meta name="description" content="Mua sắm các sản phẩm chất lượng cao với DefZone.Net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Filter />
        <ProductList products={data.products} product={data.products[0]} setProduct={setProduct} />
        <ProductDetails product={product} />
      </main>

      <footer className={styles.footer}>
        <a href="https://shop.defzone.net">
          Powered by Shop.DefZone.Net
        </a>
      </footer>
    </div>
  );
};

export default Home;
