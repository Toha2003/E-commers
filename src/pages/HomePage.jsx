import { useEffect, useState } from "react";
import productApi from "../api/productapi";
import { NavLink } from "react-router-dom";
import AppleIcon from "../Components/Assets/icons/apple_icon.svg";
import IphoneImg from "../Components/Assets/product images/Iphone_img.png";
import SalesTimer from "../Components/timer/SalesTimer";
import CardProducts from "../Components/cards/CardProducts";
import LoadingPage from "./LoadingPage";
import Carousel from "../Components/carousel/Carousel";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [limetProducts, setLimetProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await productApi.get("products");
        setProducts(data.products);
        const limetData = await productApi.get('products?limit=5&')
        setLimetProducts(limetData.data.products)
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };

    response();
  }, []);  

  return (
    <main className="w-[1170px] mx-auto Home__page">
      <section className="flex">
        <div className="border-r w-[234px] flex flex-col gap-4 pt-10">
          <NavLink >Woman’s Fashion</NavLink>
          <NavLink >Men’s Fashion</NavLink>
          <NavLink >Electronics</NavLink>
          <NavLink >Home & Lifestyle</NavLink>
          <NavLink >Medicine</NavLink>
          <NavLink >Sports & Outdoor</NavLink>
          <NavLink >Baby’s & Toys</NavLink>
          <NavLink >Groceries & Pets</NavLink>
          <NavLink >Health & Beauty</NavLink>
        </div>
        <div className="p-[40px_0_0_45px] flex justify-center items-center w-full">
          {loading?<h1 className="text-3xl text-center block">Loading...</h1>:<Carousel  items={limetProducts}/>}
          
        </div>
      </section>
      <section className="p-[140px_0_80px] border-b border-b-gray-400">
        <div>
          <div className="flex gap-4 items-center font-semibold">
            <div className="w-5 h-10 bg-[rgba(219,_68,_68,_1)] rounded-[4px]"></div>
            <p className="text-[rgba(219,_68,_68,_1)]">Today's</p>
            <div></div>
          </div>
          <div className=" p-[24px_0_31px] flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-semibold">Flash Sales</h2>
            </div>
            <div>
              <SalesTimer/>
            </div>
            <div></div>
          </div>
        </div>



        <div className="overflow-x-auto scroll-smooth flex gap-4 products-scroll p-2.5">
          {
            loading?<LoadingPage/>:limetProducts.map((product)=>(
              <CardProducts key={product.id} {...product}/>
            ))
          }
        </div>

        <div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
