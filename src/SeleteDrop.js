import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Navbar from './NavBar';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {Grid, Select}  from '@mui/material';


function SelectLabels() {
  const [data, setData] = useState([]);
  const [priceHome, setPriceHome] = useState(0);
  const { state } = useLocation();
  const navigate = useNavigate();
 
  function handerBack() {

    navigate(-1)
  }
 
  const handleSubmit = (event) => {
    const id = Math.floor(Math.random() * 100);
    event.preventDefault();
    data.map((d) =>{
        axios.post('http://localhost:5000/api/save-data', {
          'id': id,
          'age': d.plugName,
          'quantity': d.quantity,
          'price': d.price,
          'priceHome': priceHome
        }).then((respone) => {
          if(respone.status == 200){
            console.log("success!")
          } 
        })

    })

    navigate('/page4')
  };
  // กำหนดจำนวน Input Field สูงสุด
  const checkInputs = state.data;
  console.log(checkInputs);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newFormData = [...data];
    newFormData[index] = {
      ...newFormData[index],
      [name]: value
    };
    setData(newFormData);
  };

 


  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <Navbar />
      <h1>เพิ่มข้อมูลของหัวชาร์จของคุณ</h1>
      {checkInputs.map((inputs, index) => {
        return (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
              <form onSubmit={handleSubmit}>
              <FormControl>
                <Grid container spacinr={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacinr={2} style={{ display: 'flex', justifyContent: 'space-between', justifyItems:'space-between' }}>
                      <Grid item xs={4} sm={4} md={4}>
                        <InputLabel >เลือกหัวปลั๊ก</InputLabel>
                        <Select
                          name='plugName'
                          label="เลือกประเภทหัวชาร์จ"
                          key={index}
                          onChange={(event) => handleInputChange(event, index)}
                          style={{ width: 210 }}
                        >
                          {state.data.map((index) => {
                            return (
                              <MenuItem key={index} value={index}>{index}</MenuItem>
                            );
                          })}
                        </Select>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4}>
                        <TextField
                          type="number"
                          label="จำนวนหัวชาร์จ"
                          name="quantity"
                          helperText="ช่องชาร์จ (ขั้นต่ำ 1 หัวชาร์จ)"
                          onChange={(event) => handleInputChange(event, index)}
                          onBlur={(event) => {
                            if (event.target.value < 1) {
                              event.target.value = 1;
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={4} sm={4} md={4}>
                        <TextField
                          type="number"
                          label="ราคา"
                          name="price"
                          helperText="บาท/กิโลวัต (ขั้นต่ำ 0 บาท)"
                          onChange={(event) => handleInputChange(event, index)}
                          onBlur={(event) => {
                            if (event.target.value < 0) {
                              event.target.value = 0;
                            }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FormControl>
              </form>
            </div>
          </div>
        )
      })
      }
      <TextField
        label='ค่าบริการที่พัก'
        type='number'
        onChange={(event) => {
          setPriceHome(event.target.value)
        }}
        helperText="ค่าบริการสถานที่ (ขั้นต่ำ 0 บาท)"
        onBlur={(event) => {
          if (event.target.value < 0) {
            event.target.value = 0;
          }
        }}
      />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={handerBack}>
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
