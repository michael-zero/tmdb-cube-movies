import React from 'react'
import Head from 'next/head'
import styles from '../Layout/layout.module.css'
import { useRouter } from 'next/router'

const Layout = (props: {children: React.ReactNode}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Zero movies</title>
        <meta name="description" content="Generated by michael" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{cursor: 'pointer'}} onClick={() => router.push('/')} className={styles.header}>
         <p style={{fontSize: '32px'}}>Movies</p>
      </header>
      <main className={styles.main}>
        {props.children}
      </main>
    </>
  )
}

export default Layout