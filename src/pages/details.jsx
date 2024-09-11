import React, { useEffect } from 'react';
import arr from '../data';
import { redirect, useParams } from 'react-router-dom';

function Details() {
    const {id} =useParams()
    useEffect(()=>{
        arr.filter(ar => ar.id == id)
    },[id])

    console.log("arr",arr);

    const goToDetails = (id) => {
        window.location='/';
      };
     
    return (
      <>
        <h1>Details Page</h1>   
        <button onClick={goToDetails}>Go to Home</button>
        
      </>
    );
  }

export default Details;