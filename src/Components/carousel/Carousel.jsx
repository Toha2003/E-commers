import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import iphone from "../Assets/product images/Iphone_img.png";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    if(currentIndex>items.length-1){
        setCurrentIndex(0)
    }
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex+1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  console.log(items);
  
  
  return (
    <div className=" bg-black relative w-[892px] overflow-hidden rounded-2xl shadow-lg gap-10">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full flex ">
            <div className="w-[45%] flex justify-center flex-col gap-5 p-[58px_38px_47px_64px]">
              <div className="flex  items-center gap-6">
                <h5 className="text-white">{item.title}</h5>
              </div>
              <h3 className="text-5xl font-semibold text-white">
                {item.title}
              </h3>
              <NavLink className="text-white tex">Shop Now</NavLink>
            </div>
            <div className="w-[55%] pt-4 flex justify-center">
              <img width={300} alt="" src={item.images[0]} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 right-[50%] flex gap-3 justify-center items-center ">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-3 h-3 rounded-[50%] bg-gray-300 ${
              index == currentIndex ? "border-2 w-4 h-4 border-[rgba(219,_68,_68,_1)] bg-white " : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
