import InputButton from "./InputButton";

const Search = () => {
  return (
    <>
      <div className="flex flex-row">
        <InputButton price="0" priceMarg="ml-[140px]" plText="MIN" />
        <InputButton price="5799" priceMarg="ml-[110px]" plText="MAX" />
      </div>
    </>
  );
};

export default Search;
