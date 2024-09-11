import React from 'react';
import { useNavigate } from 'react-router-dom';
import arr from '../data';

function Home() {
    
    const goToDetails = (id) => {
        window.location = `/details/${id}`; ;
    };
  
    return (
      <div>
        <h1>Home Page</h1>
        {
        arr.map((ar) => (
            <div onClick={()=>goToDetails(ar.id)} 
            style={{margin:"10px",cursor:"pointer",border:"1px solid black",padding:'5px'}} 
            key={ar.id}>{ar.name}</div>
        ))
        }
      </div>
      
    );
  }
  
  export default Home;