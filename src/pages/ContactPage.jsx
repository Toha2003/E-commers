import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ContactPage = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {

    const fetchProducts = async () => {
      try{
        const response =  await axios.get('https://dummyjson.com/products')

        console.log(response.data.data);
        
        if(response.data.success){
          setProducts(response.data.data)
        }else{
          console.log(response.data.message);
        }
      }catch(error){
        console.log(error);
      }
    }

    fetchProducts();

  }, []);

  console.log(products);
  

//   axios.get("https://dummyjson.com/products").then((res) => {
//     setProducts(res.data.products);
//   });
// }, []);

  return (
    <div>
      {/* {products.map((product)=>(
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))} */}
    </div>
  )
}

export default ContactPage
