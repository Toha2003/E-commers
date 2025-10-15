import React, { useEffect, useState } from 'react'
import apiService from '../api/axios';
import LoadingPage from './LoadingPage';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response =  await apiService.get('/products')

        console.log(response.data.data);
        
        if(response.data.success){
          setProducts(response.data.data)
        }else{
          console.log(response.data.message);
        }
      }catch(error){
        console.log(error);
      }finally{
        setLoading
      }
    }

    fetchProducts();

  }, []);
 if(loading){
  return <LoadingPage/>
 }  
  return (
    <div >
      {}
    </div>

  )
}

export default HomePage