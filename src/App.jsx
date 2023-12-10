import Header from "./components/Header/Header";
import SideBarSlider from "./components/SideBarAndSlider/SideBarSlider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SideBarSlider />
            </>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <>
              <div className="flex flex-col">
                <Header />
                <Search />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
