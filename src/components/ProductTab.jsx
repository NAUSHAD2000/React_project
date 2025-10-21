import React from "react"
import Product from "./product"
//import Product from "./components/Product"
const ProductTab = () => {
    let feature = ["durable","very nice","fast"]
  return (
    <>
        <Product title="phone" price={16000} features ={feature}/>
        <Product title="laptop" price={40000}/>
        <Product title="pen" price={10}/>
      
    </>
  )
}

export default ProductTab
