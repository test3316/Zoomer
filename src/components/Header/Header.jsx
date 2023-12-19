import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import NavButton from "./NavButton";
import { BiSolidPhoneCall } from "react-icons/bi";
import { LuBaggageClaim } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import axios from "axios";
axios;

const Header = () => {
  const [hide, setHide] = useState(false);

  const popular = () => {
    axios
      .get(
        "https://api.zoommer.ge/v1/Products/v3?CategoryId=855&Page=1&Limit=60"
      )
      .then((res) => console.log(res.data.products))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    popular();
  }, [hide]);

  const onClickInput = () => {
    setHide(!hide);
  };

  return (
    <>
      <div className="flex-row">
        <div className="flex bg-[rgb(236,94,42)] w-[100%] h-[40px] justify-between items-center overflow-hidden xl:justify-around">
          <div className="flex text-white  text-[12px]  cursor-pointer ml-[15px] font-bold">
            <div className="flex justify-center items-center bg-[rgb(251,223,212)] w-[20px] h-[20px] rounded-sm mr-2">
              <BiSolidPhoneCall size={13} style={{ color: "rgb(236,94,42)" }} />
            </div>

            <h4>*7007 / +995 (32) 2 60 30 60</h4>
          </div>
          <div className="flex text-[rgb(249,204,188)] font-bold	 text-[12px] cursor-pointer space-x-3 mr-3 ">
            <NavButton title="სავაჭრო პოლიტიკა" />
            <NavButton title="განვადება" />
            <NavButton title="კარიერა" />
            <NavButton title="Trade In" />
            <NavButton title="ფილიალები" />
            <NavButton title="ყველა აქცია" />
          </div>
        </div>
        <div className="flex align-middle justify-center bg-[rgb(238,236,236)] h-[70px]">
          <div className="flex w-[151px] h-[30px] m-auto items-center ml-[15px]">
            <img src="https://zoommer.ge/icons/main-logo.svg" />
          </div>
          <div className="flex items-center ml-3 bg-[rgb(236,94,42)] w-[130px] h-[40px] rounded-[8px] justify-center text-[14px] mr-3 m-auto">
            <div className="flex w-[20px] ">
              <img src="https://zoommer.ge/icons/dots.svg" alt="" />
            </div>
            <div className="flex align-middle ml-2 font-bold text-white ">
              <button>ნავიგაცია</button>
            </div>
          </div>
          <div className="flex align-middle ml-2 ">
            <div className="m-auto">
              <CiSearch
                size={26}
                className=" absolute mt-2.5 ml-2 text-orange-500 "
              />
              <input
                type="text"
                className="w-[460px] h-[44px] m-auto rounded-[13px]	outline-none border border-orange-500 placeholder:italic placeholder:text-sm pl-[45px] pb-1 shadow-lg	"
                placeholder="ძიება"
                onClick={onClickInput}
              />
            </div>
            <div className="flex ml-5">
              <button className="  bg-white w-[130px] h-[44px] rounded-[8px] m-auto shadow-lg	text-[15px]">
                <div className="flex items-center justify-around ml-[4px] mr-[8px]">
                  <LuBaggageClaim size={20} />
                  კალათა
                </div>
              </button>
              <button className="bg-white w-[130px] h-[44px] rounded-[8px] m-auto shadow-lg	ml-5 mr-5 text-[15px]">
                <div className="flex items-center justify-around ml-[4px] mr-[8px] ">
                  <FaRegCircleUser size={20} />
                  შესვლა
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
