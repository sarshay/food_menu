import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';




export default function ItemThumbnail(props) {
    const item = props;
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={`${item.img}?w=200&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title}
                />
            </CardActionArea>
        </Card>
    );
}
