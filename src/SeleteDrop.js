import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import {RiDeleteBinLine} from "react-icons/ri";
import { Button } from '@mui/material';
import {IoMdAddCircleOutline} from "react-icons/io";
import TextField from '@mui/material/TextField';
import Navbar from './NavBar';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function SelectLabels() {
  const [inputs, setInputs] = React.useState([{ quantity: [], price: [], priceHome: []}]);
  const [age,setAge] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();
  function handerClick(){
      
      navigate('/page4')
    }
    function handerBack(){
    
      navigate(-1)
    }
    const handleChange1 = (event) => {
      setAge(...event.target.value,age);
      
    };
  
  const handleInputChange = (index, event) => {
    const {name, value} = event.target;
    const newInputs = [...inputs];
    newInputs[index]={...newInputs[index],[name]:value};
    if(name === 'quantity' && value < 1){
      newInputs[index]={...newInputs[index],[name]:1};
    }
    if(name === 'price' && value < 0){
      newInputs[index]={...newInputs[index],[name]:0};
    }
    setInputs(newInputs);
    console.log(inputs)
  };
  // const handleSubmit = () => {
  //   axios.post('/api/save-data', { data: inputs })
  //     .then(response => {
  //       console.log('Data saved successfully!');
  //     })
  //     .catch(error => {
  //       console.error('Error while saving data:', error);
  //     });
  //   };
  console.log(inputs.age)
  console.log(inputs.quantity)
  console.log(inputs.price)
  console.log(inputs.priceHome)
  
  const handleSubmit = () => {
    const response = inputs.map ((inputs, index) => {axios.post('http://localhost:5000/api/save-data',{'age': age[index],
    'quantity': inputs.quantity,
    'price': inputs.price,
    'priceHome': inputs.priceHome})})
    
     
      
      console.log(age)
      console.log(inputs.quantity)
      console.log(inputs.price)
      console.log(inputs.priceHome)
    };
   // กำหนดจำนวน Input Field สูงสุด
  const checkInputs = state.data;
  const MAX_INPUTS = checkInputs.length;
  console.log(checkInputs);
  const handleAddInput = () => {
    
    if (inputs.length < MAX_INPUTS) { // ตรวจสอบจำนวน Input Field ก่อนที่จะเพิ่ม
      const values = [...inputs];
      values.push({ age: '', quantity: '', price: '' });
      setInputs(values);
    }
    if(inputs.length===MAX_INPUTS){
      alert('ไม่สามารถกดเพิ่มได้เพราะจำนวนที่คุณเลือกได้เลือกครบแล้ว');
      return;
    }
    
  };
  
  const handleRemoveInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };
  

  return (
    <div style={{textAlign:'center',justifyContent:'center'}}>
      <Navbar/>
      <h1>เพิ่มข้อมูลของหัวชาร์จของคุณ</h1>
      {checkInputs.map((inputs, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age[index]}
            label="Age"
            key={index}
            onChange={handleChange1}
            style={{width:250}}
          >
          {state.data.map((index) => {
            return(
              <MenuItem key={index} value={index}>{index}</MenuItem>
              );
            })}
        </Select>
      </FormControl>
              
            <TextField
              type="number"
              label="จำนวนหัวชาร์จ"
              name="quantity"
              helperText="ช่องชาร์จ (ขั้นต่ำ 1 หัวชาร์จ)"
              value={inputs.quantity}
              onChange={(event) => handleInputChange(index, event)}
              onBlur={(event) => {
                if(event.target.value < 0){
                  event.target.value = 0;
                }
              }}
            />
            <TextField
              type="number"
              label="ราคา"
              name="price"
              value={inputs.price}
              helperText="บาท/กิโลวัต (ขั้นต่ำ 0 บาท)"
              onChange={(event) => handleInputChange(index, event)}
            />
            {/* {index > 0 && (
              <Button onClick={() => handleRemoveInput(index)}>
                 <RiDeleteBinLine size={15} style={{color:'red'}}/>
              </Button>
            )} */}
          </div>
        </div>
      ))}

      {/* <Button onClick={handleAddInput}>
        <IoMdAddCircleOutline size={50}/>
      </Button>
      <br/> */}
      <TextField
        label='ค่าบริการที่พัก'
        type='number'
        value={inputs.priceHome}
        helperText="ค่าบริการสถานที่ (ขั้นต่ำ 0 บาท)"
        onBlur={(event) => {
          if(event.target.value < 0) {
            event.target.value = 0;
          }
        }}
      />
      <br/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="contained" onClick={handerBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handerClick}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default SelectLabels;
