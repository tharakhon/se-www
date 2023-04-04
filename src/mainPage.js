import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import ImageUpload from './ImageUpload';
import {FaGasPump} from 'react-icons/fa';
import {BsHouseDoorFill} from 'react-icons/bs';
import {GiVillage} from 'react-icons/gi';
import {FaHotel} from 'react-icons/fa';
import {RiHotelFill} from 'react-icons/ri';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";
import Navbar from './NavBar';
import axios from 'axios';

//replace a LongdoMap.js file

function MainPage() {
  const [ gender ,setGender]=useState();
  const [stationName, setStationName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const [time, setTime] = React.useState("");
  const [times, setTimes] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value); 
    console.log(event.target.value);
  };
  const handleChanges = (event) => {
      setTimes(event.target.value);
      console.log(event.target.value);
    };
  function handleNameChange(event) {
    setStationName(event.target.value); // อัพเดทค่า name ตามค่าที่ผู้ใช้กรอกใน input
  }
  function handlephoneChange(event) {
    setPhoneNumber(event.target.value); // อัพเดทค่า name ตามค่าที่ผู้ใช้กรอกใน input
  }

  // function handerClick(){
  //   navigate('/page2')
  // }
  function handerClick2(event){
    setGender(event.target.value);
    console.log(gender)
  }

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/save-data2', {
      
      // age: inputs.age,
      // quantity: inputs.quantity, 
      // price: inputs.price, 
      // priceHome: inputs.priceHome
      nameL: stationName,
      Location: gender, 
      phone: phoneNumber, 
      time1: time,
      time2: times
     })
      .then(response => {
        console.log('Data saved successfully!');
      })
      .catch(error => {
        console.error('Error while saving data:', error);
      });
      navigate('/page2')
    };
  
  return(
  <div style={{textAlign:'center',justifyContent:'center'}}>
    <Navbar/>
    
      <h1>ชื่อสถานีชาร์จ</h1>
      <input type="text" value={stationName} placeholder='ตั้งชื่อสถานีชาร์จของคุณ' style={{height:50, width:550,textAlign:'center'}} onChange={handleNameChange}/>
      <h2>เลือกประเภทของสถานที่ตั้ง</h2>
      <FormControl style={{justifyContent:'center'}}>
        <RadioGroup onChange={handerClick2}>
          <FormControlLabel  value="ปั๊มน้ำมัน" control={<Radio />} label={<div><FaGasPump size={50} />ปั๊มน้ำมัน</div>}/>
          <FormControlLabel  value="บ้าน" control={<Radio />} label={<div><BsHouseDoorFill size={50}/>บ้าน</div>}/>
          <FormControlLabel  value="หมู่บ้าน" control={<Radio />} label={<div><GiVillage size={50}/>หมู่บ้าน</div>}/>
          <FormControlLabel  value="คอนโด" control={<Radio />} label={<div><FaHotel size={50}/>คอนโด</div>}/>
          <FormControlLabel  value="โรงแรม" control={<Radio />} label={<div><RiHotelFill size={50}/>โรงแรม</div>}/>
        </RadioGroup>
      </FormControl>
      
      
      <h4>เบอร์โทรติดต่อสถานีชาร์จ
      <input type='tel' value={phoneNumber} placeholder='เบอร์โทรติดต่อสถานีชาร์จ' style={{height:30, width:250,textAlign:'center',margin:10}} maxLength={10} onChange={handlephoneChange}/>
      </h4>
      
      <h2>เวลาเปิด-ปิด</h2>
        <h2><input
          type="time"
          value={time}
          onChange={handleChange}
        />  ถึง  <input
        type="time"
        value={times}
        onChange={handleChanges}
      /></h2>
      <ImageUpload/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="contained" onClick={handerClick2}>Back</Button>
      <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </div>  
    </div>
  );
  
}

export default MainPage;