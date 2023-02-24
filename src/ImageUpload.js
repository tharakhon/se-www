import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { BiImageAdd } from "react-icons/bi";
import {TiDelete} from "react-icons/ti";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ImageUpload = () => {
const [images, setImages] = useState([]);
const [disableUpload, setDisableUpload] = useState(false);


const handleChange = (event) => {
const uploadedImages = Array.from(event.target.files);
  if (images.length + uploadedImages.length > 5) {
    alert('คุณใส่เกิน 5 ภาพแล้วครับ');
    return;
  }
const newImages = uploadedImages.map((file) => URL.createObjectURL(file));
  setImages([...images, ...newImages]);
  if (images.length + uploadedImages.length === 5) {
    setDisableUpload(true);
  }
};
const handleDelete = (index) => {
  const newImages = [...images];
  newImages.splice(index, 1);
  setImages(newImages);
  setDisableUpload(false);
};

return (
  <div>
     <Container fixed>
     <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' ,border:'3px solid black'}} >
    <h4>เพิ่มรูปภาพสถานที่และหัวชาร์จ สูงสุด 5 ภาพที่ใช้ในการเติมรถ EV</h4>
    <label htmlFor="file-input">
        <BiImageAdd size={100} />
      </label>
    <input type="file"  multiple id="file-input" onChange={handleChange} style={{ display: 'none'}} disabled={disableUpload} />
    <h4>คลิกเพื่อเพิ่มรูปภาพสถานที่และหัวชาร์จ</h4>
    <Grid container spacing={{ xs: 10, md: 0}} justifyContent='center'>
    <ImageList sx={{ width: 500, height: 250 }} cols={3}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <a key={index} href={image} target='_blank' rel="noreferrer">
        <img src={image} alt='upload' loading='lazy' style={{width:100}}/>
        </a>
        <Button variant='outlined'
          onClick={() => handleDelete(index)} style={{color:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <TiDelete size={20}/>
            </Button>
      </ImageListItem>
      
  ))}
  </ImageList>
  </Grid>
  </Box>
</Container>
  </div>
);
};

export default ImageUpload;