import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import SuccessPage from './loadSuccess';
import SelectLabels from './SeleteDrop';
import CheckBug from './CheckBug';
import Bank from './Bank';
import ImageUpload from './ImageUpload';
import TimeInput from './TimeInput';
import {FaGasPump} from 'react-icons/fa'
import {BsHouseDoorFill} from 'react-icons/bs'
import {GiVillage} from 'react-icons/gi'
import {FaHotel} from 'react-icons/fa'
import {RiHotelFill} from 'react-icons/ri'
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

import Navbar from './NavBar';

//replace a LongdoMap.js file

function MainPage() {
  const [ gender ,setGender]=useState();
  return(
  <div style={{textAlign:'center',justifyContent:'center'}}>
    <Navbar/>
    
      <h1>ชื่อสถานีชาร์จ</h1>
      <input type="text" placeholder='ตั้งชื่อสถานีชาร์จของคุณ' style={{height:50, width:550,textAlign:'center'}}/>
      <h2>เลือกประเภทของสถานที่ตั้ง</h2>
      <FormControl style={{justifyContent:'center'}}>
        <RadioGroup>
      <FormControlLabel  value="ปั๊มน้ำมัน" control={<Radio />} label={<div><FaGasPump size={50}/>ปั๊มน้ำมัน</div>}/>
      <FormControlLabel  value="บ้าน" control={<Radio />} label={<div><BsHouseDoorFill size={50}/>บ้าน</div>}/>
      <FormControlLabel  value="หมู่บ้าน" control={<Radio />} label={<div><GiVillage size={50}/>หมู่บ้าน</div>}/>
      <FormControlLabel  value="คอนโด" control={<Radio />} label={<div><FaHotel size={50}/>คอนโด</div>}/>
      <FormControlLabel  value="โรงแรม" control={<Radio />} label={<div><RiHotelFill size={50}/>โรงแรม</div>}/>
      </RadioGroup>
      </FormControl>
      
      
      <h4>เบอร์โทรติดต่อสถานีชาร์จ
      <input type='tel' placeholder='เบอร์โทรติดต่อสถานีชาร์จ' style={{height:30, width:250,textAlign:'center',margin:10}}/>
      </h4>
      
      <TimeInput/>
      <ImageUpload/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="contained">Back</Button>
      <Button variant="contained">Next</Button>
      </div>
      
        {/* <CheckBug/> 
       <SelectLabels/> 
       <Bank/> 
      <SuccessPage/> */}
      
      
    </div>
  );
  
}

export default MainPage;