
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Divider from '@mui/material/Divider';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

export default function ShopThumbnail(props) {
    const shopData = props.shop;
    return (

        <React.Fragment>
            {shopData == 'loading'
                ? <Loading />
                : <Box sx={{ pt: 0.5 }}>
                    <CardActionArea
                        sx={{
                            backgroundImage: `url(${shopData.feature_image})`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `right`
                        }}
                        component={Link}
                        to={`/${shopData.id}`}>

                        <CardContent
                            sx={{
                                background: `radial-gradient(${shopData.color}a5 10%,rgba(0,0,0,1))`,
                                position: `relative`,
                                textAlign:'center',
                                minHeight: `200px`
                            }}><br />
                            <Typography gutterBottom variant="h5" component="div">
                                {shopData.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {shopData.description}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                </Box>
            }
        </React.Fragment>
    );
}


const Loading = () => {
    return (
        <Box sx={{ m: 2, pt: 0.5 }}>
            <Skeleton height={100} animation="wave" variant="rectangular" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" width="60%" />
        </Box>
    )
}