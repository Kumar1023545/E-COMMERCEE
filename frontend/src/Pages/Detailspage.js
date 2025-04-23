import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Detail from '../Components/Details';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const Detailspage = () => {

   const {id}=useParams();
   const[detail,setdetail]=useState([]);

   useEffect(()=>{
    const fetchData=async()=>{
        const response=await fetch(`https://server-phi-blue.vercel.app/api/products/${id}`);
        const data=await response.json();
        setdetail(data)
    }
    fetchData();
   },[])

  return (
    <>
    <Navbar/>
    <div className='container mt-5'>
        <Detail detail={detail} />
    </div>
    <Footer/>
    </>
  )
}
