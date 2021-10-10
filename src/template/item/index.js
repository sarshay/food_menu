import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


import a_photo from './../../demo-backend/item/item.jpg'



export default function ItemThumbnail(props) {
  return (
    <Card>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          height="140"
          sx={{ width: 151 }}
          image={a_photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.item} ရဲ့ description အကြောင်းအရာနည်းနည်းရေး
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
