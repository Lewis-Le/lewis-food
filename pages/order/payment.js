import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import db from '../utils/db';
import { useContext } from 'react';

import Layout from '../../components/Layout'
import { DataContext } from '../_app'


export default function App() {

  const [current_list_foods_order, setCurrent_list_foods_order] = useContext(DataContext);

  return (
    <Layout>
      <div>
        <p>Hoàn tất đơn hàng</p>
        {
          current_list_foods_order?.map(data => {
            return <div>
              <img className="rounded-lg" src={data.img} />
              <p className="hidden lg:block text-sm text-center text-white">{data.title}</p>
            </div>
          })
        }
        <div>
          <input type="text" placeholder="Nhập số điện thoại" />
          <input type="text" placeholder="Nhập địa chỉ giao hàng" />
        </div>
      </div>
    </Layout>
  )
}
