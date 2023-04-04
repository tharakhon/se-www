import { Box } from '@chakra-ui/react'
import { Button } from '@mui/material';
import { Flex } from '@chakra-ui/react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Skeleton, TextField } from '@mui/material';
import Navbar from './NavBar';
import { useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useMemo, useState } from 'react';
import { FaRestroom } from 'react-icons/fa';
import { TbAirConditioning } from 'react-icons/tb';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiCoffee } from 'react-icons/bi';
import { GiCctvCamera } from 'react-icons/gi';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import axios from 'axios';
function MapApis() {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [genders, setGenders] = useState('');
  const center = useMemo(() => ({ lat: 13.72917, lng: 101.53389 }), []);
  const [markerPosition, setMarkerPosition] = useState(center);
  const [selected, setSelected] = useState(null);
  const [stationName, setStationName] = useState("");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCPLldINYn2Ieus0zkmZt1ytSFJtKjFGRg',
    libraries: ['places'],
  })
  if (!isLoaded) {
    return <Skeleton />
  }
  function handerClick() {

    navigate('/page5')
  }
  function handerBack() {

    navigate(-1)
  }
  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/save-data3', {
      marker:markerPosition.lat,
      markers:markerPosition.lng,
      gender: gender, 
      genders: genders, 
      address: stationName,
     })
      .then(response => {
        console.log('Data saved successfully!');
      })
      .catch(error => {
        console.error('Error while saving data:', error);
      });
      navigate('/page5')
    };
  
  function handleAddressChange(event) {
    setStationName(event.target.value); // อัพเดทค่า name ตามค่าที่ผู้ใช้กรอกใน input
    console.log(stationName)
  }
  function handerClick1(event) {
    setGender(event.target.value);
    console.log(gender)
  }
  function handerClick2(event) {
    setGenders(event.target.value);
    console.log(genders)
  }
  function handleMarkerClick(event) {
    const newPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setMarkerPosition(newPosition);
    console.log(newPosition)
  }
  return (
    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
      <Navbar />
      <h2 >ที่อยู่สถานีชาร์จของคุณ</h2>
      <div>
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
      <h4>หลังจากค้นหาสถานที่ใกล้เคียงแล้วให้คลิกที่ map เพื่อที่จะปักหมุด</h4>
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='60vh'
        w='95vw'
      >
        <Box position='relative' h='50%' w='50%'>
          <GoogleMap
            center={selected || center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false
            }}
            onClick={handleMarkerClick}
          >
            {selected && <Marker
              position={markerPosition}
            />}
          </GoogleMap>
        </Box>
        <TextField          id="outlined-multiline-static"
          label="ใส่ที่อยู่ของสถานีชาร์จของคุณ"
          multiline
          rows={4}
          style={{width:'50%',margin:20}}
          onChange={handleAddressChange}></TextField>
        
      </Flex>
      <div>
        <h3>สิ่งอำนวยความสะดวกในสถานีชาร์จ</h3>
        <FormGroup onChange={handerClick1} style={{justifyContent:'center',alignItems:'center'}}>
          <FormControlLabel control={<Checkbox />} label={<div><FaRestroom size={50} />ห้องน้ำ</div>} value="ห้องน้ำ" />
          <FormControlLabel control={<Checkbox />} label={<div><TbAirConditioning size={50} />เครื่องปรับอากาศ</div>} value="เครื่องปรับอากาศ" />
          <FormControlLabel control={<Checkbox />} label={<div><AiOutlineWifi size={50} />Wi-Fi</div>} value="Wi-Fi" />
          <FormControlLabel control={<Checkbox />} label={<div><BiCoffee size={50} />กาแฟ</div>} value="กาแฟ" />
        </FormGroup>
        <h3>ความปลอดภัยของสถานีชาร์จ</h3>
        <FormGroup onChange={handerClick2} style={{justifyContent:'center',alignItems:'center'}}>
          <FormControlLabel control={<Checkbox />} label={<div><GiCctvCamera size={50} />กล้องวงจรปิด</div>} value="กล้องวงจรปิด" />
          <FormControlLabel control={<Checkbox />} label={<div><GiPoliceOfficerHead size={50} />เจ้าหน้าที่รักษาความปลอดภัย</div>} value="เจ้าหน้าที่รักษาความปลอดภัย" />
        </FormGroup>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={handerBack}>Back</Button>
        <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  )
}
const PlacesAutocomplete = ({ setSelected }) => {
  const { ready, value, setValue, suggestions: { status, data },
    clearSuggestions, } = usePlacesAutocomplete();
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    console.log(lat, lng)
  }
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder='ค้นหาสถานที่ใกล้เคียง'
        style={{height:50, width:550,textAlign:'center'}}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} >
                <ComboboxOptionText />
              </ComboboxOption>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>

  )
}
export default MapApis;
