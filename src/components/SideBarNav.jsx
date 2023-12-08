const SideBarNav = (props) => {
  return (
    <>
      <div className="flex items-center	 justify-start bg-white p-5  w-[246px] h-[20px] border-b-2">
        <a href="" className="flex  divide-y divide-slate-200 text-[12px] ">
          {props.category}
        </a>
      </div>
    </>
  );
};

export default SideBarNav;
