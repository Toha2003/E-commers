import { useEffect, useState } from "react";
import productApi from "../api/productapi";
import { NavLink } from "react-router-dom";
import AppleIcon from "../Components/Assets/icons/apple_icon.svg";
import IphoneImg from "../Components/Assets/product images/Iphone_img.png";
import SalesTimer from "../Components/timer/SalesTimer";
import CardProducts from "../Components/cards/CardProducts";
import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [limetProducts, setLimetProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await productApi.get("products");
        setProducts(data.products);
        const limetData = await productApi.get('products?limit=10&')
        setLimetProducts(limetData.data.products)
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };

    response();
  }, []);
  console.log(limetProducts);

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
        <div className="p-[40px_0_0_45px]">
          <div className="bg-black w-[892px] flex relative">
            <div className="w-[45%] flex justify-center flex-col gap-5 p-[58px_38px_47px_64px]">
              <div className="flex  items-center gap-6">
                <img src={AppleIcon} alt="" width={40} />
                <h5 className="text-white">iPhone 14 Series</h5>
              </div>
              <h3 className="text-5xl font-semibold text-white">
                Up to 10% off Voucher
              </h3>
              <NavLink className="text-white tex">Shop Now</NavLink>
            </div>
            <div className="pt-4 flex justify-center">
              <img src={IphoneImg} alt="" />
            </div>
            <div className="absolute bottom-3 right-[50%] flex gap-3">
              <div className=" cursor-pointer w-3 h-3 rounded-[50%] bg-gray-300 "></div>
              <div className=" cursor-pointer w-3 h-3 rounded-[50%] bg-gray-300 "></div>
              <div className=" cursor-pointer w-3 h-3 rounded-[50%] bg-gray-300 "></div>
              <div className=" cursor-pointer w-3 h-3 rounded-[50%] bg-gray-300 "></div>
              <div className=" cursor-pointer w-3 h-3 rounded-[50%] bg-gray-300 "></div>
            </div>
          </div>
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

        <div></div>
      </section>
    </main>
  );
};

export default HomePage;
