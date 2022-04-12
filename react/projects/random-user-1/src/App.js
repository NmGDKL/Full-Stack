
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Mail from './assets/email.svg'
import Phone from "./assets/phone.svg";
import Loc from "./assets/location.svg";


function App() {
  const [data, setData] = useState({});
  
  const getUser = () => {
    axios.get('https://randomuser.me/api/')
    .then(res => setData(res.data.results[0]));
}

useEffect(() => {
  getUser();
},[]);

  return (
    <div className="App">
      <div >
        <div style={{display: "flex", flexDirection: "column"}}>
            <img src={data.picture.large} alt="" style={{width: "100px", borderRadius: "50%"}}/>
           <img src={Mail} alt="" style={{width: "50px"}}/>
           <img src={Phone} alt="" style={{width: "50px"}}/>
           <img src={Loc} alt="" style={{width: "50px"}}/>
        </div>
        <div>
            <p>{data.name.title}{data.name.first} {data.name.last}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.location.city}, {data.location.country}</p>
            <p>Age:{data.dob.age}</p>
            <p> Date : {data.registered.date.slice(0,10)}</p>
        </div>
    </div>
      <button onClick={()=> getUser()}>
        Random User
      </button>

    </div>
  );
}

export default App;
