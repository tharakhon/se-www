import {Box, Modal} from '@chakra-ui/react'
import {Button,ButtonGroup} from '@mui/material';
import {Flex} from '@chakra-ui/react';
import {HStack} from '@chakra-ui/react';
import {IconButton} from '@chakra-ui/react';
import {Input} from '@chakra-ui/react';
import {Text} from '@chakra-ui/react';
import {TbLocationFilled} from 'react-icons/tb';
import {FaTimesCircle} from 'react-icons/fa';
import {useJsApiLoader,GoogleMap,Marker,LoadScript,
Autocomplete,} from '@react-google-maps/api';
import { Skeleton } from '@mui/material';
import Navbar from './NavBar';
import { useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import {FaRestroom} from 'react-icons/fa';
import {TbAirConditioning} from 'react-icons/tb';
import {AiOutlineWifi} from 'react-icons/ai';
import {BiCoffee} from 'react-icons/bi';
import {GiCctvCamera} from 'react-icons/gi';
import {GiPoliceOfficerHead} from 'react-icons/gi';



const center = {lat:13.72917,lng:100.52389}
function MapApis() {
  const navigate = useNavigate();
  const [ gender ,setGender]=useState();
  const [ genders ,setGenders]=useState();
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCPLldINYn2Ieus0zkmZt1ytSFJtKjFGRg',
    })
    const markers = [
      { position: { lat: 13.72917, lng: 100.52389 } }, // สร้าง Marker ที่พิกัดเดียวกับ Center
      { position: { lat: 13.73003, lng: 100.53601 } },
      { position: { lat: 13.74003, lng: 100.54601 } }, // สร้าง Marker อีกตำแหน่งหนึ่ง
    ];
    if(!isLoaded){
        return <Skeleton/>
    }
    function handerClick(){
      
      navigate('/page5')
    }
    function handerBack(){
    
      navigate(-1)
    }
    function handerClick1(event){
      setGender(event.target.value);
      console.log(gender)
    }
    function handerClick2(event){
      setGenders(event.target.value);
      console.log(genders)
    }
  return (
    <div style={{justifyContent:'center',textAlign:'center'}}>
      <Navbar/>
      <h2 >ที่อยู่สถานีชาร์จของคุณ</h2>
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='95vw'
    >
      <Box position='relative' h='50%' w='50%'>
        <GoogleMap 
        center={center} 
        zoom={15} 
        mapContainerStyle={{width:'100%',height:'100%'}}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false
        }}
        > 
       {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} />
          ))}
        </GoogleMap>
        </Box>
      <Box
        p={4}
        borderRadius='lg'
        mt={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
      >
        <HStack spacing={4}>
       
            <Input type='text' placeholder='Origin' />
          
            <Input type='text' placeholder='Destination' />
          
          
          <ButtonGroup>
            <Button colorScheme='pink' type='submit'>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimesCircle />}
              onClick={() => alert(123)}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: </Text>
          <Text>Duration: </Text>
          <IconButton
            aria-label='center back'
            icon={<TbLocationFilled />}
            isRound
            onClick={() => alert(123)}
            bgColor='white'
          />
        </HStack>
      </Box>
        <h3>สิ่งอำนวยความสะดวกในสถานีชาร์จ</h3>
        <FormGroup onChange={handerClick1}>
          <FormControlLabel control={<Checkbox />} label={<div><FaRestroom size={50} />ห้องน้ำ</div>} value="ห้องน้ำ"/>
          <FormControlLabel control={<Checkbox />} label={<div><TbAirConditioning size={50} />เครื่องปรับอากาศ</div>} value="เครื่องปรับอากาศ"/>
          <FormControlLabel control={<Checkbox />} label={<div><AiOutlineWifi size={50} />Wi-Fi</div>} value="Wi-Fi"/>
          <FormControlLabel control={<Checkbox />} label={<div><BiCoffee size={50} />กาแฟ</div>} value="กาแฟ"/>
        </FormGroup>
      <h3>ความปลอดภัยของสถานีชาร์จ</h3>
        <FormGroup onChange={handerClick2}>
          <FormControlLabel control={<Checkbox />} label={<div><GiCctvCamera size={50} />กล้องวงจรปิด</div>} value="กล้องวงจรปิด"/>
          <FormControlLabel control={<Checkbox />} label={<div><GiPoliceOfficerHead size={50} />เจ้าหน้าที่รักษาความปลอดภัย</div>} value="เจ้าหน้าที่รักษาความปลอดภัย"/>
        </FormGroup>
    </Flex>
    
        <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button variant="contained" onClick={handerBack}>Back</Button>
                    <Button variant="contained" onClick={handerClick}>Next</Button>
                </div>
    </div>
  )
}

export default MapApis;
