import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [input, setInput] = useState("");
  const [popularSearch, setPopularSearch] = useState([]);

  async function logMovies() {
    const response = await fetch(
      "https://api.zoommer.ge/v1/Products/get-popular-searches"
    );
    const movies = await response.json();
    setPopularSearch(movies);
  }

  useEffect(() => {
    logMovies();
  }, [input]);

  const inputButton = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="flex-row">
        <div className="flex bg-[rgb(236,94,42)] w-[100%] h-[40px] justify-between items-center overflow-hidden">
          <div className="flex text-white  text-[12px]  cursor-pointer ml-2 font-bold">
            <h4>*7007 / +995 (32) 2 60 30 60</h4>
          </div>
          <div className="flex text-[rgb(249,204,188)] font-bold	 text-[12px] cursor-pointer space-x-3 mr-2 ">
            <h4 className="hover:text-white">სავაჭრო პოლიტიკა</h4>
            <h4 className="hover:text-white"> განვადება</h4>
            <h4 className="hover:text-white">კარიერა</h4>
            <h4 className="hover:text-white">Trade In</h4>
            <h4 className="hover:text-white">ფილიალები</h4>
            <h4 className="hover:text-white">ყველა აქცია</h4>
          </div>
        </div>
        <div className="flex align-middle bg-[rgb(238,236,236)] h-[70px]">
          <div className="flex align-middle w-[151px]  items-center ml-2">
            <img src="https://zoommer.ge/icons/main-logo.svg" />
          </div>
          <div className="flex align-middle ml-3 bg-[rgb(236,94,42)] w-[130px] h-[40px] rounded-[8px] justify-center text-[14px] mr-3 m-auto">
            <div className="flex w-[20px] ">
              <img src="https://zoommer.ge/icons/dots.svg" alt="" />
            </div>
            <div className="flex align-middle ml-2 font-bold text-white shadow-lg	">
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
                onChange={inputButton}
              />
            </div>
            <div className="flex ml-5">
              <button className="bg-white w-[130px] h-[44px] rounded-[8px] m-auto shadow-lg	">
                კალათა
              </button>
              <button className="bg-white w-[130px] h-[44px] rounded-[8px] m-auto shadow-lg	ml-5">
                შესვლა
              </button>
            </div>
          </div>
        </div>
        <div>
          {Object.values(popularSearch).map((e) => {
            console.log([e][0][0]);
          })}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
