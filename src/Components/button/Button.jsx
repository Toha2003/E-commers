
const Button = (props) => {

  return (
    <div>
      <button className="cursor-pointer w-[234px] bg-[rgba(219,_68,_68,_1)] h-14 text-white rounded-[4px]">{props.children}</button>
    </div>
  )
}

export default Button
