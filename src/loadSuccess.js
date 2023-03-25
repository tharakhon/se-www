import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { AiFillCheckCircle } from "react-icons/ai";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
  }));

function SuccessPage() {
    const [next, setNext] = useState();
    const [formData, setFormData] = React.useState({});


return(
    <Grid container style={{ margin:"auto" ,display:"flex", minHeight: '100vh' , justifyContent:'center', alignContent:'center'}}>
      <Grid item xs={12}>
      <div style={{ height: 200, width: '100%', justifyContent: 'center'} }></div>
           <Item style={{ textAlign: 'center'}}>
            <div style={{margin:"auto" ,display:"flex", justifyContent:'center',color:"green"}}>
                 <AiFillCheckCircle size={100} />  </div>
            <div style={{fontSize: '40px'} }>
                ลงทะเบียนสำเร็จแล้ว</div>
            <div style={{fontSize: '26px'} }>
                รอการยืนยันประมาณ 3-4 วัน</div><br/>
                 <Button
                    type="submit"
                    variant="contained"
                    style={{float: "center",borderRadius:'50px',border: "1px solid black",backgroundColor:"lightgrey",color:"black"}}
                    to="/main">
                    กลับหน้าหลัก
                  </Button>
            <div style={{ height: 290, width: '100%', justifyContent: 'center'} }></div>
            </Item>
        </Grid>
        
    </Grid> 
    

);
}
export default SuccessPage;