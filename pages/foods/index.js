import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import react from 'react';
import { useState, useEffect } from 'react';

import Layout from '../../components/Layout'


export default function App() {

  const [foods_data, setFoods_data] = useState([]);


  useEffect(() => {
    get_all_foods();
  }, []);


  const get_all_foods = async () => {
    const res_data = await fetch('/api/foods');
    const data = await res_data.json();
    setFoods_data(data);
    // console.log(data)
  };

  function add_more_food(e){
    let btn_div_parent = e.target.parentNode;
    console.log(btn_div_parent);
    btn_div_parent.childNodes[1].textContent = `${parseInt(btn_div_parent.childNodes[1].textContent) + 1}`;
    // if(count === 0){
      //add thêm món này vào đơn hàng
      //res trả về số count của món này trong đơn hàng
      //set count = res số count trả về
    // }
    //else if(count > 0){
      //chỉ cần tăng count lên
      //res trả về số count của món này trong đơn hàng
      //set count = res số count trả về
    // }
  };

  function remove_more_food(e){
    // if(count === 1){
      //remove món này khỏi đơn hàng
      //set count = 0
    // }
    //else if(count > 1){
      //chỉ cần giảm count xuống
      //res trả về số count của món này trong đơn hàng
      //set count = res số count trả về
    // }
  }



  return (
    <Layout>
      <p className="text-center text-lg">Tất cả món ăn</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-12 mt-7">
        {
          foods_data?.data?.map(food => {
            return <>
              <div className="bg-or-yellow w-auto p-4 mt-12 shadow-lg rounded-lg">
                <img className="w-48 mx-auto rounded-lg -mt-12" src={food.img} />
                <p className="text-lg text-center">{food.title}</p>
                <p className="text-sm">{food.bref_des}</p>
                <p className="text-md">{food.price}</p>
                <p className="text-sm">{`Còn lại ${food.total} phần`}</p>
                <div className="flex justify-end">
                  <button>-</button>
                  <p>0</p>
                  <button onClick={add_more_food}>+</button>
                </div>
              </div>
            </>
          })
        }
      </div>
    </Layout>
  )
}
