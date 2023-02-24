import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { AiFillCheckCircle } from "react-icons/ai";


function SuccessPage() {
    const [next, setNext] = useState();
    const [formData, setFormData] = React.useState({});


return(
    <Grid container style={{ margin:"auto" ,display:"flex", minHeight: '100vh' , justifyContent:'center', alignContent:'center'}}>
        <AiFillCheckCircle size={100} />

        <Grid item xs={12}>
        <h3>ลงทะเบียนสำเร็จแล้ว</h3>
        </Grid>

        <Grid item xs={12}>
        <p>รอการยืนยันประมาณ 3 - 4 วัน</p>
        </Grid>

        <Grid outlined spacing={100}>
          <Grid item xs={12} sm={12} >
            <Button
              type="submit"
              variant="outlined"
              color="primary" 
              style={{float: "left"}}
              to="/register/information"
            >
              กลับหน้าหลัก
            </Button>
            </Grid>
        </Grid>
    </Grid> 

);
}
export default SuccessPage;