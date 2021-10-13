import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Filter } from '../components/filter'
import { ProductList } from '../components/product-list'
import styles from '../styles/Home.module.css'
import { Sheet } from '../types/sheet'

const Home: NextPage = () => {

  const [sheet, setSheet] = useState<Sheet>()

  useEffect(() => {
    axios.get(`https://docs.google.com/spreadsheets/d/1f93_oo5mQM8sY1eg-HEz6JI3qzYSH1_y7wGWCN-fsB0/gviz/tq?tqx=out:json`).then((response: any) => {
      let data = JSON.parse(response.data.toString().slice(47, response.data.length - 2));
      setSheet(data)
      console.log(data)
    })
  }, [])

  return (
    <div className="app">
      <Head>
        <title>Cửa hàng - Shop.DefZone.Net</title>
        <meta name="description" content="Mua sắm các sản phẩm chất lượng cao với DefZone.Net" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo">

        </div>
        <div className="menu">
          <ul>
            <li>Cửa hàng</li>
            <li>Liên hệ</li>
            <li>Workshops</li>
            <li>Blogs</li>
          </ul>
          <div className=""></div>
        </div>
      </header>

      <main className="main">
        <Filter />
        <ProductList products={sheet?.table.rows} />
        <div className="product">
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
