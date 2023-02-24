import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from './loadSuccess';
import SelectLabels from './SeleteDrop';
import CheckBug from './CheckBug';
import Bank from './Bank';
import React from 'react';
import App from './App';


function Nav(){
    return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/page2" element={<CheckBug />} />
            <Route path="/page3" element={<SelectLabels />} />
            <Route path="/page4" element={<SuccessPage />} />
          </Route>
        </Routes>
  </BrowserRouter>
  );

}
export default Nav;