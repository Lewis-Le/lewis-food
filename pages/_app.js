import { createContext } from 'react'
import '../styles/globals.css'
import { useState } from "react";

export const DataContext = createContext(null);

function MyApp({ Component, pageProps }) {

  const [current_list_foods_order, setCurrent_list_foods_order] = useState([]);
  

  return <DataContext.Provider value={{current_list_foods_order, setCurrent_list_foods_order}}>
    <Component {...pageProps} />
  </DataContext.Provider>
};

export default MyApp
