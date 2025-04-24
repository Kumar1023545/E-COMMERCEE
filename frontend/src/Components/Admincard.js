// import React from 'react';
// import {
//   Card,
//   CardMedia,
//   Grid,
//   Typography,
//   Box,
//   Button,
// } from '@mui/material';
// import axios from 'axios';

// const Admincard = (props) => {

//    const deleteProduct=async(id)=>{
//     try{
//      await axios.delete(`https://server-phi-blue.vercel.app/api/products/${id}`)
//     }
//     catch(error){
//       console.log('Error in deleting product',error)
//     }
//    }

//   return (
//     <Grid item xs={12}>
//       <Card
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           mb: 2,
//           p: 2,
//           boxShadow: 3,
//           borderRadius: 2,
//           gap: 2,
//         }}
//       >
//         {/* Image */}
//         <CardMedia
//           component="img"
//           image={props.image}
//           alt={props.name}
//           sx={{
//             width: { xs: 60, sm: 40 },
//             height: { xs: 60, sm: 40 },
//             objectFit: 'cover',
//             borderRadius: 1,
//           }}
//         />

//         {/* Info Section */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             flex: 1,
//             gap: 2,
//           }}
//         >
//           <Box sx={{ minWidth: '50px' }}>
//             <Typography variant="h6" fontWeight={400} sx={{
//                  fontSize: {
//                     xs: "0.8rem", // Adjusted font size for mobile screens
//                     sm: "1rem", // Adjusted font size for small screens
//                   },
//             }} >
//               {props.name}
//             </Typography>
//           </Box>
//           <Box sx={{ minWidth: '50px' }}>
//             <Typography variant="subtitle2" color="text.secondary">
//               Brand: <span style={{color:'violet'}}> {props.brand} </span>
//             </Typography>
//           </Box>
//           <Box sx={{ minWidth: '50px' }}>
//             <Typography variant="subtitle2" color="text.secondary">
//               Category: {props.cat}
//             </Typography>
//           </Box>
//           <Box sx={{ minWidth: '50px' }}>
//             <Typography variant="subtitle1" color="primary">
//               ₹{props.dis}
//             </Typography>
//           <Button onClick={() => props.onDelete(props.id)}>Delete</Button>

//           </Box>
//         </Box>
//       </Card>
//     </Grid>
//   );
// };

// export default Admincard;

import React from 'react';
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Admincard = (props) => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          mb: 2,
          p: 2,
          boxShadow: 3,
          borderRadius: 3,
          gap: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Product Image */}
        <CardMedia
          component="img"
          image={props.image}
          alt={props.name}
          sx={{
            width: { xs: 80, sm: 100 },
            height: { xs: 80, sm: 100 },
            objectFit: 'cover',
            borderRadius: 2,
          }}
        />

        {/* Product Info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={500} sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
              {props.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Brand: <span style={{ color: 'violet' }}>{props.brand}</span>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Category: {props.cat}
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography variant="subtitle1" color="primary">
              ₹{props.dis}
            </Typography>

            <Tooltip title="Delete Product" arrow>
              <IconButton
                color="error"
                onClick={() => props.onDelete(props.id)}
              >
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default Admincard;

