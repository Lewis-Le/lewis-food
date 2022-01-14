import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import db from '../utils/db';

import Layout from '../../components/Layout'


export default function App() {
  
  return (
    <Layout>
      <div>
        <p>Hoàn tất đơn hàng</p>
        {

        }
        <div>
          <input type="text" placeholder="Nhập số điện thoại" />
          <input type="text" placeholder="Nhập địa chỉ giao hàng" />
        </div>
      </div>
    </Layout>
  )
}
