import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from './loadSuccess';
import SelectLabels from './SeleteDrop';
import CheckBug from './CheckBug';
import Bank from './Bank';
import React from 'react';
import App from './App';
import MainPage from "./mainPage";


function Nav(){
    return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bank />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/page2" element={<MainPage />} />
            <Route path="/page3" element={<CheckBug />} />
            <Route path="/page4" element={<App />} />
            <Route path="/page4" element={<SelectLabels />} />
            <Route path="/page4" element={<SuccessPage />} />
          </Route>
        </Routes>
  </BrowserRouter>
  );

}
export default Nav;