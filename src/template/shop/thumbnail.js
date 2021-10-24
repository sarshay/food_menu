
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Divider from '@mui/material/Divider';

export default function ShopThumbnail(props) {
    const shopData = props.shop;
    return (
        <div>
            <CardActionArea
                sx={{
                    backgroundImage:`url(${shopData.feature_image})`,
                    backgroundSize:`cover`,
                    backgroundRepeat:`no-repeat`,
                    backgroundPosition:`right`
                }}
                component={Link}
                to={shopData.id}>
               
                <CardContent
                sx={{
                    background:`linear-gradient(90deg, rgba(0,0,0,0.6)30%,rgba(0,0,0,0.4))`,
                    position:`relative`,
                    height:`200px`
                }}><br/>
                    <Typography gutterBottom variant="h5" component="div">
                        {shopData.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shopData.description}
                    </Typography>
                </CardContent>
                
            </CardActionArea>
        </div>
    );
}
