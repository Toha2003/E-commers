const Header = () => {
  return (
    <div className=' bg-black '>
      <div className="w-[1170px] mx-auto h-12 flex justify-center items-center gap-20">
        <p className='text-white text-[18px] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <select name="language" id="language" className=" bg-black text-white">
          <option value="en">EN</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </div>
  )
}

export default Header
