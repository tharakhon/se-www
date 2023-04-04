import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Navbar from "./NavBar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import axios from 'axios';


function CheckBug(){
    const navigate = useNavigate();
    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const [user, setUser] = useState([]);
    const [count, setCount] = useState(0);
    function handerClick(){
        
        navigate('/page3',{state: {  data : checkedBoxes}})
      }
      function handerBack(){
      
        navigate(-1)
      }
      useEffect(() => {
        axios.get('http://localhost:5000/api/data')
        .then(respone => {
          setUser(respone.data.results)
        })
        
      },[])
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
        console.log(checkedBoxes)
      }
    return(
        <div style={{textAlign:'center',justifyContent:'center'}}>
            <Navbar/>
            <h3>ที่พักของคุณมีหัวชาร์ตใดบ้าง</h3>

            {user.map((item, index) => (
              <div >
                <FormControlLabel style={{marginBottom:90}}
                    key={index}
                    control={<Checkbox />}
                    label={item.nameBug}
                    value={item.nameBug}
                    onChange={handleChange}
                    checked={checkedBoxes.includes(item.nameBug)}
                />
                
                  <img src={item.imgBug} />
                </div>
            ))}
            
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button variant="contained" onClick={handerBack}>Back</Button>
                <Button variant="contained" onClick={handerClick}>Next</Button>
            </div>
        
        </div>
    )

    
}
export default CheckBug;