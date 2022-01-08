import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import react from 'react';
import { useState, useEffect } from 'react';

import Layout from '../../components/Layout'


export default function App() {

  const [foods_data, setFoods_data] = useState([]);
  const [current_list_foods_order, setCurrent_list_foods_order] = useState([]);  //là array chứa các obj foods 


  useEffect(() => {
    get_all_foods();
  }, []);


  const get_all_foods = async () => {
    const res_data = await fetch('/api/foods');
    const data = await res_data.json();
    setFoods_data(data);
    // console.log(data)
  };

  function add_more_food(food){
    let btn_div_parent = e.parentNode;
    console.log(e);
    
    // if(count === 0){
      //add thêm món này vào đơn hàng
      setCurrent_list_foods_order(current_list_foods_order.push({
        id_food: '',
        title: '',
        note: '',
        total: btn_div_parent.childNodes[1].textContent,
        price: '',
        total_price: ''
      }));
      localStorage.setItem('current_list_foods_order', JSON.stringify(current_list_foods_order));
      //set sl món ăn
      btn_div_parent.childNodes[1].textContent = `${parseInt(btn_div_parent.childNodes[1].textContent) + 1}`;
      //giảm phần món ăn xuống trong allfoods
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


  function create_order(){

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
                <div className="flex justify-end gap-3">
                  <button>-</button>
                  <p className="text-center text-lg" id={`count${food._id}`}>0</p>
                  <button className="border border-green-700 w-7 rounded-full text-center pb-1" onClick={add_more_food.bind(this, food)}>+</button>
                </div>
              </div>
            </>
          })
        }
      </div>
    </Layout>
  )
}
