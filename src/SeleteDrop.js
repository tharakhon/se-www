import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import {RiDeleteBinLine} from "react-icons/ri";
import { Button } from '@mui/material';
import {IoMdAddCircleOutline} from "react-icons/io";
import TextField from '@mui/material/TextField';


function SelectLabels() {
  const [inputs, setInputs] = React.useState([{ age: '', quantity: '', price: ''}]);


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
  };
  const handleSubmit = () => {
    axios.post('/api/save-data', { data: inputs })
      .then(response => {
        console.log('Data saved successfully!');
      })
      .catch(error => {
        console.error('Error while saving data:', error);
      });
    };
  const MAX_INPUTS = 5; // กำหนดจำนวน Input Field สูงสุด

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
    <div>
      <h1>เพิ่มข้อมูลของหัวชาร์จของคุณ</h1>
      {inputs.map((input, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
              <TextField
                select
                name="age"
                label='เลือกหัวชาร์จ'
                value={input.age}
                onChange={(event) => handleInputChange(index, event)}
                style={{width:250}}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            <TextField
              type="number"
              label="จำนวนหัวชาร์จ"
              name="quantity"
              helperText="ช่องชาร์จ (ขั้นต่ำ 1 หัวชาร์จ)"
              value={input.quantity}
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
              value={input.price}
              helperText="บาท/กิโลวัต (ขั้นต่ำ 0 บาท)"
              onChange={(event) => handleInputChange(index, event)}
            />
            {index > 0 && (
              <Button onClick={() => handleRemoveInput(index)}>
                 <RiDeleteBinLine size={15} style={{color:'red'}}/>
              </Button>
            )}
          </div>
        </div>
      ))}
      <Button onClick={handleAddInput}>
        <IoMdAddCircleOutline size={50}/>
      </Button>
      <br/>
      <TextField
        label='ค่าบริการที่พัก'
        type='number'
        helperText="ค่าบริการสถานที่ (ขั้นต่ำ 0 บาท)"
        onBlur={(event) => {
          if(event.target.value < 0) {
            event.target.value = 0;
          }
        }}
      />
      <br/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="contained" onClick={handleSubmit}>
          Back
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default SelectLabels;
