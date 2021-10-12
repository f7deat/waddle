import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Filter } from '../components/filter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
        <Filter/>
        <div className="list">
          <div className="search">
            <input type="text" className="input-search" placeholder="Nhập từ khóa..." />
            <div className="search-keyword">
              <span className="label">Kết quả tìm kiếm cho </span>
              <span className="keyword">“Monstera”</span>
            </div>
          </div>
          <div className="sort">

          </div>
        </div>
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
