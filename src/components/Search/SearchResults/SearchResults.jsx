import { useEffect, useState } from "react";
import axios from "axios";

import { LuBaggageClaim } from "react-icons/lu";

const SearchResults = () => {
  const [homePageFetched, setHomePageFetched] = useState([]);
  const [paginaton, setPagination] = useState(1);

  const fetchGoogleData = () => {
    axios
      .get(
        `https://api.zoommer.ge/v1/Products/v3?CategoryId=855&Page=${paginaton}&Limit=60`
      )
      .then((res) => {
        setHomePageFetched(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchGoogleData();
  }, [paginaton]);

  const paginationArray = () => [1, 2, 3, 4, 5, 6, 7];

  const showMoreHandler = (page) => {
    setPagination(page);
  };

  return (
    <>
      <div className="flex flex-wrap  cursor-pointer justify-center items-center">
        {homePageFetched.map((e, id) => (
          <div className="flex-row w-[160px] ml-10 m-2" key={id}>
            <div className="flex flex-col">
              <img className="w-[160px] h-[160px]" src={e.imageUrl} alt="" />
              <div className=" font-bold">{e.price} &#8382;</div>
              <div className="text-[8px]">
                თვეში
                <span className="text-orange-500 font-bold ml-1">
                  63&#8382;
                </span>
                -დან
              </div>
              <div className="flex flex-wrap text-[15px] mt-1">
                <h1 className="text-[12px] font-semibold">{e.name}</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex justify-center items-center w-[40px] h-[40px] bg-[rgb(242,242,242)]">
                  <img src="https://zoommer.ge/icons/compare-card.svg" alt="" />
                </div>
                <div className="flex items-center w-[110px] h-[40px] justify-around p-2  bg-[rgb(242,143,106)] rounded-[3px] text-[12px] font-semibold">
                  <LuBaggageClaim size={14} />
                  დამატება
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex">
          {paginationArray().map((page, index) => (
            <div
              onClick={() => showMoreHandler(page)}
              key={index}
              className="flex w-[30px] h-[30px] justify-center items-center bg-[rgb(242,242,242)] font-semibold text-[12px] ml-1 mt-5 mb-5"
            >
              <div>{page}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
