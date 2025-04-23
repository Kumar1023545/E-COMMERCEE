import React, { useState } from 'react';
import {
  TextField, Button, MenuItem,
  Paper, Box, Typography, Stack
} from '@mui/material';
import axios from 'axios';
import Adminnavbar from '../Components/Adminnavbar';
import Adminfooter from '../Components/Adminfooter';

const categories = ['Laptop', 'Mobile', 'Tablet', 'TV', 'Headphones', 'Camera', 'Accessories', 'Other'];

const Createproduct = () => {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    discountprice: '',
    quantity: '',
    description: '',
    images: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...form,
        images: form.images.split(',')  // convert string to array
      };
      await axios.post('https://server-phi-blue.vercel.app/api/products', productData);
      alert('Product created successfully!');
      setForm({
        name: '',
        brand: '',
        category: '',
        price: '',
        discountprice: '',
        quantity: '',
        description: '',
        images: ''
      });
    } catch (err) {
      console.error(err);
      alert('Error creating product');
    }
  };

  return (
    <>
    <Adminnavbar/>
    <div className='contaner py-5'>
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Name" name="name" fullWidth value={form.name} onChange={handleChange} required />
          <TextField label="Brand" name="brand" fullWidth value={form.brand} onChange={handleChange} required />
          <TextField type="number" label="Price" name="price" fullWidth value={form.price} onChange={handleChange} required />
          <TextField type="number" label="Discount Price" name="discountprice" fullWidth value={form.discountprice} onChange={handleChange} required />
          <TextField type="number" label="Quantity" name="quantity" fullWidth value={form.quantity} onChange={handleChange} required />
          <TextField label="Description" name="description" fullWidth value={form.description} onChange={handleChange} required />
          <TextField
            select
            label="Category"
            name="category"
            fullWidth
            value={form.category}
            onChange={handleChange}
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Image URLs (comma separated)"
            name="images"
            fullWidth
            value={form.images}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" fullWidth>
            Create Product
          </Button>
        </Stack>
      </Box>
    </Paper>
    </div>
    <Adminfooter/>
    </>
  );
};

export default Createproduct;
