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



const center = {lat:13.72917,lng:100.52389}
function MapApis() {
  
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
    
  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      bgColor='blue.200'
      h='100vh'
      w='100vw'
    >
      <Box position='relative' left={0} top={0} h='50%' w='50%' >
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
    </Flex>
  )
}

export default MapApis;
