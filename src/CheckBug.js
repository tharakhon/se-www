import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Navbar from "./NavBar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function CheckBug(){
    const navigate = useNavigate();
    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const [count, setCount] = useState(0);
    function handerClick(){
        
        navigate('/page3',{state: {  data : checkedBoxes}})
      }
      function handerBack(){
      
        navigate(-1)
      }
      function handleChange(event) {
        const { value } = event.target;
        const index = checkedBoxes.indexOf(value);
        if (index === -1) {
          setCheckedBoxes([...checkedBoxes, value]);
          setCount(count + 1);
        } else {
          setCheckedBoxes([...checkedBoxes.slice(0, index), ...checkedBoxes.slice(index + 1)]);
          setCount(count - 1);
        }
        
      }
    return(
        <div style={{textAlign:'center',justifyContent:'center'}}>
            <Navbar/>
            <h4>ที่พักของคุณมีหัวชาร์ตใดบ้าง</h4>
            <FormControlLabel control={<Checkbox />} label="bug 1" value="test1" onChange={handleChange} checked={checkedBoxes.includes('test1')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 2" value="test2" onChange={handleChange} checked={checkedBoxes.includes('test2')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 3" value="test3" onChange={handleChange} checked={checkedBoxes.includes('test3')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 4" value="test4" onChange={handleChange} checked={checkedBoxes.includes('test4')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 5" value="test5" onChange={handleChange} checked={checkedBoxes.includes('test5')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 6" value="test6" onChange={handleChange} checked={checkedBoxes.includes('test6')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 7" value="test7" onChange={handleChange} checked={checkedBoxes.includes('test7')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 8" value="test8" onChange={handleChange} checked={checkedBoxes.includes('test8')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 9" value="test9" onChange={handleChange} checked={checkedBoxes.includes('test9')} />
            <br />
            <FormControlLabel control={<Checkbox />} label="bug 10" value="test10" onChange={handleChange} checked={checkedBoxes.includes('test10')} />
            <br />
            
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button variant="contained" onClick={handerBack}>Back</Button>
                <Button variant="contained" onClick={handerClick}>Next</Button>
            </div>
        
        </div>
    )

    
}
export default CheckBug;