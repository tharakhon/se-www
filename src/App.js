import logo from './logo.svg';
import ImageUpload from './ImageUpload';
import TimeInput from './TimeInput';
import {useState} from 'react';
import SuccessPage from './loadSuccess';
import SelectLabels from './SeleteDrop';
import CheckBug from './CheckBug';
import Bank from './Bank';
import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import loadMap from './loadMap';


function App() {
  const [gender,setGender]=useState();
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/page2")
  }
  return(
    <div style={{textAlign:'center'}}>
      <h1>ชื่อสถานีชาร์จ</h1>
      <input type="text" placeholder='ตั้งชื่อสถานีชาร์จของคุณ' style={{height:50, width:550,textAlign:'center'}}/>
      <h2>เลือกประเภทของสถานที่ตั้ง</h2>
      <input type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value)}/>รูป Male
      <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/>รูป Female
      <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/>รูป Female
      <input type="radio" name="gender" value="male" onChange={e=>setGender(e.target.value)}/>รูป male
      <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/>รูป Female
      <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/>รูป Female
      <h4>เบอร์โทรติดต่อสถานีชาร์จ
      <input type='tel' placeholder='เบอร์โทรติดต่อสถานีชาร์จ' style={{height:30, width:250,textAlign:'center',margin:10}}/>
      </h4>
      <TimeInput/>
      <ImageUpload/>
      <Button onClick={handleClick}>Next</Button>
        <CheckBug/> 
       <SelectLabels/> 
       <Bank/> 
      <SuccessPage/>
      {/* jnkjnjnk */}
      <loadMap/>
    </div>
  )
}

export default App;
