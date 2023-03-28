import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from './loadSuccess';
import SelectLabels from './SeleteDrop';
import CheckBug from './CheckBug';
import Bank from './Bank';
import React from 'react';
import App from './App';
import MainPage from "./mainPage";
import RequestPage from "./RequestPage";
import MapApis from "./mapApi";


function Nav(){
    return(
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />}/>
          <Route path="/page2" element={<CheckBug />} />
          <Route path="/page3" element={<SelectLabels />} />
          <Route path="/page4" element={<MapApis/>} />
          <Route path="/page5" element={<Bank />} />
          <Route path="/page6" element={<RequestPage />} />
          <Route path="/page7" element={<SuccessPage />} />
          
        </Routes>
  </BrowserRouter>
  );

}
export default Nav;