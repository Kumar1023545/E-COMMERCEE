import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router';
import { AuthContext } from './Authcontext';




const Cards = (props) => {
  const{addtocart}=useContext(AuthContext);
  return (
    <>
     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
  <CardActionArea sx={{ flexGrow: 1 }}>
    <Box
      sx={{
        position: 'relative',
        height: 400,
        overflow: 'hidden',
        '&:hover .hoverImg': {
          opacity: 1,
        },
        '&:hover .mainImg': {
          opacity: 0,
        },
      }}
    >
      {/* Main Image */}
      <CardMedia
        component="img"
        image={props.image}
        alt={props.name}
        className="mainImg"
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease',
          opacity: 1,
        }}
      />
      {/* Hover Image */}
      <CardMedia
        component="img"
        image={props.hover}
        alt={props.name + ' hover'}
        className="hoverImg"
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease',
          opacity: 0,
        }}
      />
    </Box>

    <CardContent>
      <Typography gutterBottom variant="h6">{props.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        Brand: {props.brand} | Category: {props.cat}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>
          <i className="fa-solid fa-dollar-sign"></i>{props.price}
        </span>
        Buy at <i className="fa-solid fa-dollar-sign"></i> <u>{props.dis}</u>
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions sx={{ px: 2, pb: 2 }}>
    <Button size="large" variant="contained" color="primary"  >Buy Now</Button>
    <Button size="large" color="secondary"><Link to={`/movie/${props.id}`} >More details</Link></Button>
  </CardActions>
</Card>
    </>
  )
}

export default Cards