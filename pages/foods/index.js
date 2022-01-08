import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import react from 'react';
import { useState, useEffect, useRef } from 'react';

import Layout from '../../components/Layout'


function Foods_panel({ list, list_id }) {

  // console.log(list_id);

  return (
    <>
      <div className="w-full h-full flex items-end justify-center pointer-events-none fixed">
        <div className="bg-carrot flex justify-center gap-3 p-4 rounded-lg w-4/6 h-2/6">
          {
            list_id.map(id => {
              console.log(list[id]);
              return <>
                <div className="w-24 animate__animated animate__zoomInDown">
                  <img src={list[id].img} />
                  <p>{list[id].title}</p>
                </div>
              </>
            })
          }
        </div>
      </div>

    </>
  );
};



export default function App() {

  const [foods_data, setFoods_data] = useState([]);   //data get từ server
  const [current_list_foods_order, setCurrent_list_foods_order] = useState([]);  //là array chứa các obj foods 
  const [current_total_price, setCurrent_total_price] = useState(0);
  const [list_id, setList_id] = useState([]);


  useEffect(() => {
    get_all_foods();
  }, []);


  const get_all_foods = async () => {
    const res_data = await fetch('/api/foods');
    const data = await res_data.json();
    setFoods_data(data);
    // console.log(data)
  };


  function add_more_food(e) {
    let btn_div_parent = e.target.parentNode;
    let div_parent = btn_div_parent.parentNode;
    btn_div_parent.childNodes[0].classList.remove('hidden');  //hiện nút remove
    // console.log(div_parent);
    if (list_id.indexOf(div_parent.id) === -1) {    //nếu chưa có id món này trong list thì push thêm vào
      list_id.push(div_parent.id);
      setList_id(list_id);
    };
    current_list_foods_order[`${div_parent.id}`] = {    //add/update thông tin món này vào đơn hàng
      id_food: div_parent.id,
      title: div_parent.childNodes[1].textContent,
      img: div_parent.childNodes[0].src,
      note: '',
      total: `${parseInt(btn_div_parent.childNodes[1].textContent) + 1}`,
      price: div_parent.childNodes[3].textContent,
      total_price: div_parent.childNodes[3].textContent * (parseInt(btn_div_parent.childNodes[1].textContent) + 1),
    };
    setCurrent_list_foods_order(current_list_foods_order);
    // console.log(current_list_foods_order);
    btn_div_parent.childNodes[1].textContent = `${parseInt(btn_div_parent.childNodes[1].textContent) + 1}`;   //tăng sl món ăn
    setCurrent_total_price(current_total_price + parseInt(current_list_foods_order[`${div_parent.id}`].price));   //Tính tổng số tiền đơn hàng
    //giảm phần món ăn xuống trong allfoods
  };


  function remove_more_food(e) {
    let btn_div_parent = e.target.parentNode;
    let div_parent = btn_div_parent.parentNode;
    if (btn_div_parent.childNodes[1].textContent === '1') {   //ẩn nút remove
      // current_list_foods_order.splice(`${div_parent.id}`, 1);
      // console.log(current_list_foods_order.indexOf(current_list_foods_order[`${div_parent.id}`]))
      setList_id(list_id.filter(id => id != div_parent.id));  //xóa id món này khỏi list
      e.target.classList.add('hidden');
    }
    else if (btn_div_parent.childNodes[1].textContent != '1') {
      current_list_foods_order[`${div_parent.id}`] = {    //add/update thông tin món này trong đơn hàng
        id_food: div_parent.id,
        title: div_parent.childNodes[1].textContent,
        img: div_parent.childNodes[0].src,
        note: '',
        total: `${parseInt(btn_div_parent.childNodes[1].textContent) - 1}`,
        price: div_parent.childNodes[3].textContent,
        total_price: div_parent.childNodes[3].textContent * (parseInt(btn_div_parent.childNodes[1].textContent) - 1),
      };
    };
    // console.log(div_parent);
    setCurrent_list_foods_order(current_list_foods_order);
    // console.log(current_list_foods_order);
    btn_div_parent.childNodes[1].textContent = `${parseInt(btn_div_parent.childNodes[1].textContent) - 1}`;   //giảm sl món ăn
    setCurrent_total_price(current_total_price - parseInt(current_list_foods_order[`${div_parent.id}`].price));   //Tính tổng số tiền đơn hàng
    //tăng phần món ăn lên trong allfoods
  }


  function create_order() {

  }



  return (
    <Layout>
      <p className="text-center text-lg">Tất cả món ăn</p>
      <p>Tổng giá trị thanh toán: {current_total_price}.000 VND</p>
      <Foods_panel list={current_list_foods_order} list_id={list_id} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-12 mt-7">
        {
          foods_data?.data?.map(food => {
            // let el_total_number = useRef();
            return <>
              <div id={food._id} className="bg-or-yellow w-auto p-4 mt-12 shadow-lg rounded-lg">
                <img className="w-48 mx-auto rounded-lg -mt-12" src={food.img} />
                <p className="text-lg text-center">{food.title}</p>
                <p className="text-sm">{food.bref_des}</p>
                <p className="text-md">{food.price}</p>
                <p className="text-sm">{`Còn lại ${food.total} phần`}</p>
                <div className="flex justify-end gap-3">
                  <button className="border border-green-700 w-7 rounded-full text-center pb-1 hidden" onClick={remove_more_food}>-</button>
                  <p className="text-center text-lg">0</p>
                  <button className="border border-green-700 w-7 rounded-full text-center pb-1" onClick={add_more_food}>+</button>
                </div>
              </div>
            </>
          })
        }
      </div>
    </Layout>
  )
}
