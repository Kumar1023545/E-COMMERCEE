import React, { useEffect, useState} from 'react'
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Carousels from '../Components/Carousel';

const Homepage = () => {

  const[Search,setSearch]=useState('');

  const[Data,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetch('https://server-phi-blue.vercel.app/api/products');
      const data=await response.json();
      setData(data);
    }
    fetchData();
  },[]);

  return (
    <>
    <Navbar setsearch={setSearch} />
    <div className='container-fluid pt-5'><Carousels/></div>
    <div className='container-fluid' style={{padding:30}}>
      <div className='row'>
           {Data.filter((items)=>items.name.toLowerCase().includes(Search.toLowerCase())).map((item)=>(
                <div className='col-md-3 mb-5'>
                   <Card name={item.name} image={item.images[0]} hover={item.images[1]} alt={item._id} brand={item.brand} price={item.price} dis={item.discountprice} cat={item.category} id={item._id} />
                </div>
            ))}
      </div>
    </div>
    <Footer/>

    </>
  )
}

export default Homepage