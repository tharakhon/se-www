import React,{useState} from 'react';
function TimeInput() {
    const [time, setTime] = React.useState("");
    const [times, setTimes] = React.useState("");
  
    const handleChange = (event) => {
      setTime(event.target.value); 
      console.log(event.target.value);
    };
    const handleChanges = (event) => {
        setTimes(event.target.value);
        console.log(event.target.value);
      };
  
    return (
      <div>
        <h2>เวลาเปิด-ปิด</h2>
        <h2><input
          type="time"
          value={time}
          onChange={handleChange}
        />  ถึง  <input
        type="time"
        value={times}
        onChange={handleChanges}
      /></h2>
    
      </div>
    );
  }
  export default TimeInput;