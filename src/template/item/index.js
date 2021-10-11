import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import a_photo from './../../demo-backend/item/item.jpg'



export default function ItemThumbnail(props) {
    const item = props;
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={`${item.img}?w=200&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title}
                // subtitle={item.author}
                />
            </CardActionArea>
        </Card>
    );
}
