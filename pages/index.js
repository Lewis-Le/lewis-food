import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'
import Home from '../components/home/Home'

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
