import React, { useState, useEffect }  from "react";

import axios from 'axios';
function Main(){

    const credential = {
        companyName: 'FCC',
        ownerName: "Karan",

        ownerEmail: 'sampleKaran@gmail.com',
        accessCode: 'FKDLjg',
      };
      const [data, setData] = useState({});
    useEffect(() => {
       
        axios.post('http://20.244.56.144/train/register', credential)
          .then(response => {
            
            setData(response.data);
          })
          .catch(error => {
           
            console.error('Error fetching data:', error);
          });
      }, []);

    return (<div>
<p>{data.companyName} </p><br></br>
<p>{data.clientID}</p><br></br>
<p>{data.clientSecret}</p><br />

    </div>)
}

export default Main;