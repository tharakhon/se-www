import React from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { Button } from "@mui/material";
import {RiDeleteBinLine} from "react-icons/ri";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import '../src/Bank.css'
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Bank(){
    const [inputs, setInputs] = React.useState([{ age: ''}]);
    const [age, setAge] = React.useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleChanges = (event) => {
        const uploadedImage = event.target.files[0];
        setImage(URL.createObjectURL(uploadedImage));
    };

    // const handleDelete = (index) => {
    //   const newImages = [...image];
    //   URL.revokeObjectURL(image);
    //   newImages.splice(index, 1);
    //   setImage(newImages);
    // };

    const handleChange = (event) => {
        // สร้าง regular expression สำหรับตรวจสอบว่าเป็นตัวเลขเท่านั้น
        const regex = /^[0-9]*$/;
        // ตรวจสอบว่าเป็นตัวเลขหรือไม่ และมีไม่เกิน 10 หลัก
        if (event.target.value === '' || (regex.test(event.target.value) && event.target.value.length <= 10)) {
          setAccountNumber(event.target.value);
        }
      };
      const handleChange1 = (event) => {
        setAge(event.target.value);
        console.log(age)
      };
    const handleInputChange = (index, event) => {
        const {name, value} = event.target;
        const newInputs = [...inputs];
        newInputs[index]={...newInputs[index],[name]:value};
       
        setInputs(newInputs);
      };
      function handerClick(){
      
        navigate('/page6')
      }
      function handerBack(){
      
        navigate(-1)
      }
      const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
      };
    console.log(accountNumber)
      const handleUpload = () => {
        const reader = new FileReader();
        reader.onload = () => {
          setFileUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      };
      const handleSubmit = () => {
        axios.post('http://localhost:5000/api/save-data1', {
          
           age: age,
           bank: accountNumber,
           
           
            // age: 'test',
            // quantity: '100', 
            // price: '100', 
            // priceHome: '100'
         })
          .then(response => {
            console.log('Data saved successfully!');
          })
          .catch(error => {
            console.error('Error while saving data:', error);
          });
        };
    return(
        <div style={{textAlign:'center',justifyContent:'center'}}>
          <Navbar/>
          <h1>ช่องทางการชำระเงิน</h1>
              <FormControl>
                <InputLabel id="demo-simple-select-label">เลือกธนาคาร</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="เลือกธนาคาร"
                    onChange={handleChange1}
                    style={{width:250}}
                  >
                   <MenuItem value='KBANK'>KBANK</MenuItem>
                  <MenuItem value='SCB'>SCB</MenuItem>
                  <MenuItem value='TMB'>TMB</MenuItem>
                  <MenuItem value='BBL'>BBL</MenuItem>
                  <MenuItem value='BBC'>BBC</MenuItem>
                  <MenuItem value='KTB'>KTB</MenuItem>
                  <MenuItem value='BAY'>BAY</MenuItem>
                  <MenuItem value='CITI'>CITI</MenuItem>
                  <MenuItem value='NBANK'>NBANK</MenuItem>
                  <MenuItem value='SCIB'>SCIB</MenuItem>
                  <MenuItem value='GSB'>GSB</MenuItem>
                  <MenuItem value='GHB'>GHB</MenuItem>
                  </Select>
                </FormControl>
            
              
              <TextField
              type='text'
              label="เลขบัญชี"
              name="quantity"
              helperText="กรอกเลขบัญชี"
              value={accountNumber}
              onChange={handleChange}
              maxLength={10} >
            </TextField>
            <div className="container-p">
            <input type="file" onChange={handleFileInput} />
            <button onClick={handleUpload}>Upload</button>
            {fileUrl && (
              <>
                {selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png' ? (
                  <img src={fileUrl} alt="Uploaded image" width="35%" height="450px" />
                ) : (
                  <embed src={fileUrl} type={selectedFile.type} width="50%" height="450px" />
                )}
              </>
            )}
            </div>
              
            
            
            <div style={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="contained" onClick={handerBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handerClick}>
          Next
        </Button>
      </div>
        </div>
    )
}
export default Bank;

/// Test Edit
