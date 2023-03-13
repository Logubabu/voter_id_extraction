import React, { FC, useEffect, useState } from 'react';


function VoterSearch(props:any) {

  const [voter_data, setvoter] = useState([]);

   useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/voter_data");
      const resp = await res.json();
      setvoter(resp);
    }
    fetchData();
  }, []);
  // function fetchvoterData(param:any) {
  //     const res=fetch("http://localhost:4000/voter_data/?param="+param).then((resp) => resp.json());
  //     console.log(res)
  //     return res
  //   }
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
        {/* {voter_data} */}
      </form>
      </div>
  )
}

export default VoterSearch;
