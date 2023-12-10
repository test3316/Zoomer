const InputButton = (props) => {
  return (
    <>
      <div className="flex">
        <p
          className={`text-[18px] absolute ${props.priceMarg} mt-[22px] font-semibold	`}
        >
          {props.price} &#8382;
        </p>
        <input
          placeholder={props.plText}
          type="text"
          className={`flex flex-row bg-white h-[40px] w-[162.5px]  border-[1.8px] border-orange-500 ml-[15px] mt-[15px]  placeholder:pl-2 outline-none text-[13px]`}
        />
      </div>
    </>
  );
};
export default InputButton;
