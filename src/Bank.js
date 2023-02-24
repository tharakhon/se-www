import React from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { Button } from "@mui/material";
import {RiDeleteBinLine} from "react-icons/ri";
function Bank(){
    const [inputs, setInputs] = React.useState([{ age: '', quantity: '', price: ''}]);
    const [accountNumber, setAccountNumber] = useState('');
    const [image, setImage] = useState(null);

    const handleChanges = (event) => {
        const uploadedImage = event.target.files[0];
        setImage(URL.createObjectURL(uploadedImage));
    };

    const handleDelete = (index) => {
      const newImages = [...image];
      URL.revokeObjectURL(image);
      newImages.splice(index, 1);
      setImage(newImages);
    };

    const handleChange = (event) => {
        // สร้าง regular expression สำหรับตรวจสอบว่าเป็นตัวเลขเท่านั้น
        const regex = /^[0-9]*$/;
        // ตรวจสอบว่าเป็นตัวเลขหรือไม่ และมีไม่เกิน 10 หลัก
        if (event.target.value === '' || (regex.test(event.target.value) && event.target.value.length <= 10)) {
          setAccountNumber(event.target.value);
        }
      };

    const handleInputChange = (index, event) => {
        const {name, value} = event.target;
        const newInputs = [...inputs];
        newInputs[index]={...newInputs[index],[name]:value};
       
        setInputs(newInputs);
      };
    return(
        <div>
            {inputs.map((input, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
            <TextField
                select
                name="age"
                label='ธนาคาร'
                value={input.age}
                onChange={(event) => handleInputChange(index, event)}
                style={{width:250}}
              >
                <MenuItem value={10}>KBANK</MenuItem>
                <MenuItem value={20}>SCB</MenuItem>
                <MenuItem value={30}>TMB</MenuItem>
                <MenuItem value={30}>BBL</MenuItem>
                <MenuItem value={30}>BBC</MenuItem>
                <MenuItem value={30}>KTB</MenuItem>
                <MenuItem value={30}>BAY</MenuItem>
                <MenuItem value={30}>CITI</MenuItem>
                <MenuItem value={30}>NBANK</MenuItem>
                <MenuItem value={30}>SCIB</MenuItem>
                <MenuItem value={30}>GSB</MenuItem>
                <MenuItem value={30}>GHB</MenuItem>
              </TextField>
              <TextField
              type='text'
              label="เลขบัญชี"
              name="quantity"
              helperText="กรอกเลขบัญชี"
              value={accountNumber}
              onChange={handleChange}
              maxLength={10} >
            </TextField>
            <TextField
            type='file'
            onChange={handleChanges}>
            </TextField>
            {image && <img src={image} alt='upload'/>}
            {index > 0 && (
              <Button onClick={() => handleDelete(index)}>
              </Button>
            )}
              </div>
            ))}
            
        </div>
    )
}
export default Bank;