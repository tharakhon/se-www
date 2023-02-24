import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
function CheckBug(){
    
    return(
        <div>
            <h4>ที่พักของคุณมีหัวชาร์ตใดบ้าง</h4>
            <FormControlLabel control={<Checkbox/>} label='bug 1'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 2'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 3'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 4'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 5'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 6'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 7'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 8'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 9'/>
            <br/>
            <FormControlLabel control={<Checkbox/>} label='bug 10'/>
            
            
        
        </div>
    )

    
}
export default CheckBug;