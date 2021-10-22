import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Filter } from '../components/filter'
import { ProductDetails } from '../components/product-details'
import { ProductList } from '../components/product-list'
import styles from '../styles/home.module.css'
import { Product } from '../types/product'

const Home: NextPage = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    axios.get(`https://opensheet.vercel.app/1f93_oo5mQM8sY1eg-HEz6JI3qzYSH1_y7wGWCN-fsB0/products`).then((response: any) => {
      setProducts(response.data)
      // Select first data row
      setProduct(response.data[0])
    })
  }, [])

  return (
    <div className="app">
      <Head>
        <title>Cửa hàng - Shop.DefZone.Net</title>
        <meta name="description" content="Mua sắm các sản phẩm chất lượng cao với DefZone.Net" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={150} height={33} />
        </div>
        <div className={styles.menu}>
          <ul>
            <li className={styles.active}>Cửa hàng</li>
            <li>Liên hệ</li>
            <li>Workshops</li>
            <li>Blogs</li>
          </ul>
          <div className=""></div>
        </div>
      </header>

      <main className={styles.main}>
        <Filter />
        <ProductList products={products} product={product} setProduct={setProduct} />
        <ProductDetails product={product} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://shop.defzone.net"
          target="_blank"
          rel="noopener noreferrer"
        >Powered by Shop.DefZone.Net</a>
      </footer>
    </div>
  )
}

export default Home
