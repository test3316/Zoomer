import SideBarNav from "./SideBarNav";
const SideBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-col h- w-[246px] m-auto mt-10 shadow-2xl">
          <SideBarNav category="მობილურები" />
          <SideBarNav category="ტაბები" />
          <SideBarNav category="ლეპტოპები | IT" />
          <SideBarNav category="აუდიო სისტემა" />
          <SideBarNav category="Gaming" />
          <SideBarNav category="TV | მონიტორები" />
          <SideBarNav category="ფოტო | ვიდეო" />
          <SideBarNav category="სმარტ გაჯეტები" />
        </div>
        <div className="flex bg-black w-[895px] h-[340px] justify-center content-center ">
          sadas
        </div>
      </div>
    </>
  );
};

export default SideBar;
