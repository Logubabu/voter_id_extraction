import React, { FC, useEffect, useState } from 'react';
import axios from "axios";
import styles from './voter_search.module.css';
import VoterDataDisplay from '../voter_data_display/voter_data_display';

function VoterSearch(props:any) {

  let [voter_data, setvoter] = useState(<></>);

  // function fetch() {
  //   return new Promise(resolve => setTimeout(() => resolve(42), 1000));
  // }
  // const response =  axios.request({
  //   baseURL: "http://localhost:4000/voter_data",
  //   // url,
  //   // method,
  //   // data,
  // });

  // useEffect(() => {
  function fetchvoterData(param:any) {
      const res=fetch("http://localhost:4000/voter_data/?param="+param).then((resp) => resp.json());
      console.log(res)
      return res
    }
  return(
    <div className="voter_id_input border sborder-solid">
      <form>
        <label>
          Voter ID Number 
          <br/>
          <input type="text" name="name" className="voter-text-box border-yellow-800 border sborder-solid"/>
          <br />
        </label>
        <br/>
        <button className="search-button rounded-md border sborder-solid border-teal-500 bg-green-400">Search</button>
        {voter_data}
        {/* onClick={() => fetchvoterData()} */}
        {/* <input type="submit" value="Submit" /> */}
      </form>
      </div>
  )
}

export default VoterSearch;
