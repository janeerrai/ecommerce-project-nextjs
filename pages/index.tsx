import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ProductCard from '../components/Product/ProductCard/ProductCard'
import ProductCard2 from '../components/Product/ProductCard2/ProductCard2'
import ProductHeader from '../components/Product/ProductHeader/ProductHeader'
import ProductHeader2 from '../components/Product/ProductHeader2.tsx/ProductHeader2'
import Button from '../components/ui/Button/Button'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  const alertOnClick = () => {
    alert('Hello!');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button>Base Button</Button>
        <br></br>
        <Button variant="primary" onClick={() => alertOnClick()}>Base Button</Button>
        <br></br>
        <Button variant="secondary" disabled={true}>Base Button</Button>
        <br>
        </br>
        <ProductCard />
        <br>
        </br>
        <ProductCard2 />
        <br></br>

      </main>

      <div>
        <ProductHeader />
        <ProductHeader2 />
      </div>
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
