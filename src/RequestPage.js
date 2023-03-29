import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function RequestPage({ state }) {
    const navigate = useNavigate();
    function handerClick(){
      
        navigate('/page7')
      }
      function handerBack(){
      
        navigate(-1)
      }
    return (
        <div>
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginBottom={5}>
            <Grid item xs={6} sm={6}>
                <Grid container spacing={2} marginLeft={1}>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <h2>ชื่อสถานีชาร์จ</h2>
                            <Typography variant="subtitle1" >
                                สถานีชาร์จในบ้าน โดย ชื่อเจ้าของบ้าน
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="h5">หัวปลั๊ก</Typography>
                        </div>
                        <Grid container spacing={2} >
                            <Grid item xs={2} sm={2}>
                                <img
                                    style={{ width: 55, heigh: "auto" }}
                                    src={require("../src/logo/PlugmoodLOGO.png")}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <div>
                                    <Typography variant="subtitle2">J-1772</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">จำนวนช่องชาร์จ</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">
                                        ราคา xxx บาท/กิโลวัต
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item xs={2} sm={2}>
                                <img
                                    style={{ width: 55, heigh: "auto" }}
                                    src={require("../src/logo/PlugmoodLOGO.png")}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <div>
                                    <Typography variant="subtitle2">J-1772</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">จำนวนช่องชาร์จ</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">
                                        ราคา xxx บาท/กิโลวัต
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item xs={2} sm={2}>
                                <img
                                    style={{ width: 55, heigh: "auto" }}
                                    src={require("../src/logo/PlugmoodLOGO.png")}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <div>
                                    <Typography variant="subtitle2">J-1772</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">จำนวนช่องชาร์จ</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">
                                        ราคาค่าสถานที่ 0 บาท
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <Typography variant="subtitle2">
                                    ราคาค่าสถานที่ 0 บาท
                                </Typography>
                            </Grid>
                            
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">เลือกประเภทของสถานที่ตั้ง</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">หมูบ้าน</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            เบอร์โทร์ติดต่อสถานที่ : 081-234-2344
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            เวลาเปิดทำการ 09:00 - 16:00
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">สิ่งอำหน่วยความสะดวก</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">ห้องน้ำ</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            เครื่องปรับอากาศ
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">Wi-Fi</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">Cafe</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">ความปลอดภัย</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">กล้องวงจรปิด</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">สถานที่</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            113/100 loshaitaijrak distrcts 20000 USA
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">ช่องทางชำระเงิน</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            ธนาคาร xxxxx หมายเลขบัญชี xxxxxxxxxxx
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Grid container justify="right" alignItems="right">
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../src/logo/PlugmoodLOGO.png")}
                            alt="defalut"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../src/logo/PlugmoodLOGO.png")}
                            alt="defalut"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../src/logo/PlugmoodLOGO.png")}
                            alt="defalut"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../src/logo/PlugmoodLOGO.png")}
                            alt="defalut"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button variant="contained" onClick={handerBack}>Back</Button>
                <Button variant="contained" onClick={handerClick}>Submit</Button>
            </div>
        </div>
    );
}