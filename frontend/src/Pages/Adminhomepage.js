import React, { useEffect, useState } from 'react'
import Admincard from '../Components/Admincard';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import Adminnavbar from '../Components/Adminnavbar';
import Adminfooter from '../Components/Adminfooter';


const Adminhomepage = () => {

  const[Data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetch('https://server-phi-blue.vercel.app/api/products');
      const data=await response.json();
      setData(data);
    }
    fetchData();
  },[])
  
  const handleDelete = async (id) => {
    try {
      await fetch(`https://server-phi-blue.vercel.app/api/products/${id}`, {
        method: 'DELETE',
      });
      setData(prev => prev.filter(product => product._id !== id)); // update UI
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };
  

  return (
    <>
    <Adminnavbar/>
     <div className='container mt-5'>
           <div className='row'>
           <div className='col-6'><h3 className='p-2'>All the Products :</h3></div>
           <div className='col-3'><Button component={Link} to="/addproduct" size="large" variant="contained" color="secondary">Add a Product</Button></div>
           </div>
        
       {Data.map((item)=>(
          <div className='row '>
             <Admincard name={item.name} image={item.images[0]} hover={item.images[1]} alt={item._id} brand={item.brand} price={item.price} dis={item.discountprice} cat={item.category} id={item._id}   onDelete={handleDelete} />
          </div>
       ))}
     </div>
     <Adminfooter/>
    </>
  )
}

export default Adminhomepage