import Header from "./components/Header/Header";
import SideBarSlider from "./components/SideBarAndSlider/SideBarSlider";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";

import SearchPage from "./SearchPage";
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
          path="/mobiles"
          element={
            <>
              <SearchPage />
            </>
          }
        ></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
}

export default App;
