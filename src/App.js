import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[user,setUser]= useState([]);
  const[indi,setIndi] = useState([]);

  useEffect(()=>{
  fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))

},[])

useEffect(()=>{
  fetch('http://localhost:5000/user:id')
    .then(res => res.json())
    .then(data => setIndi(data))

},[])
  return (
    <div className="App">
      
      <ul>
        {
          <li>{indi.name}</li>
        }
      </ul>
      
    </div>
  );
}

export default App;
