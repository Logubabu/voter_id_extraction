import React, { FC, useEffect, useState } from 'react';
import styles from './voter_data_display.module.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
// import { useDemoData } from '@mui/x-data-grid-generator';



function VoterDataDisplay(data:any){
  // debugger
 const [datas,setData]=useState<any>([])
 const [tempdata,setTempdata]=useState<any>([])
 const [change,setChange]=useState(false)



  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/voter_data");
      const resp = await res.json();
      setData(resp);
      setTempdata(resp)
      // return resp
    }
    fetchData();
  }, []);
  
  function UpdateVoter(){
    // const url="http://localhost:4000/voter_data"
    fetch("http://localhost:4000/voter_data",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(tempdata)
    })
    .then(res=>res.json())
    .then(res=>{
      setTempdata(res)
      setChange(true)
    })
  }
  return (
    <form className='voter-form'>
  <label>Voter ID: <input type="text" disabled value={tempdata.voterId} className="mt-1"
  onChange={(e)=>{
    setTempdata({...tempdata,voterId:e.target.value})

  }}
  /></label>
  <br />
  <label>Voter Name: <input type="text" value={tempdata.name} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,name:e.target.value})

  }}/></label>
  <br />
  <label>Gender: <input type="text" value={tempdata.gender} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,gender:e.target.value})

  }}
  /></label>
  <br />
  <label>Age: <input type="text" value={tempdata.age} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,age:e.target.value})

  }}/></label>
  <br />
  <label>Phone Number: <input type="text" value={tempdata.phoneNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,phoneNumber:e.target.value})

  }}/></label>
  <br />
  <label>House Number: <input type="text" value={tempdata.houseNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,houseNumber:e.target.value})

  }}/></label>
  <br />
  <label>Street: <input type="text" value={tempdata.street} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,street:e.target.value})

  }}/></label>
  <br />
  <label>Ward Number: <input type="text" value={tempdata.wardNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,wardNumber:e.target.value})

  }}/></label>
  <br />
  <label>Booth Number: <input type="text" value={tempdata.boothNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,boothNumber:e.target.value})

  }}/></label>
  <br />
  <label>Constituency Number: <input type="text" value={tempdata.constituencyNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,constituencyNumber:e.target.value})

  }}/></label>
  <br />
  <label>District Number: <input type="text" value={tempdata.districtNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,districtNumber:e.target.value})

  }}/></label>
  <br />
  {/* <label>AC Booth Number: <input type="text" value={tempdata.acBoothNumber} className="mt-1"/></label>
  <br /> */}
  <label>Serial Number: <input type="text" value={tempdata.serialNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,serialNumber:e.target.value})

  }}/></label>
  <br />
  <label>Section Number: <input type="text" value={tempdata.sectionNumber} className="mt-1"
  onChange={(e)=>{
    setChange(true)
    setTempdata({...tempdata,sectionNumbersectionNumber:e.target.value})

  }}/></label>
  <br />
  {change?(
    <>
    <button className="cancel-button" onClick={(e)=>{
      setTempdata({...datas})
      setChange(false)
    }}>Cancel</button>
    <button className="save-button" onClick={UpdateVoter}>Save</button>
  </>
  ):null}

</form>
  )
}

export default VoterDataDisplay;
