import reactDom from 'react-dom';
import react from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';


function App() {

  const router = useRouter();

  return (
    <>
      <div className="flex justify-evenly">
        <div className="grid grid-cols-1 content-center">
          <p>Xin chào bạn đến với Bếp của LEWIS</p>
          <p>Phục vụ các món ăn khuya</p>
          <p>Giao hàng vào các giờ cố định</p>
          <button className="w-fit bg-or-yellow hover:bg-knaki rounded-full p-2 px-5 mt-4 transition-all duration-200" onClick={() => router.push('/foods')}>Xem tất cả món ăn</button>
        </div>
        <div className="max-w-md">
          <img src="/img/Eating_together.png" />
        </div>
      </div>
    </>
  );

}



export default App;