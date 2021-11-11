
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Divider from '@mui/material/Divider';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Directions, LocationOn, Phone } from '@mui/icons-material';

export default function ShopThumbnail(props) {
    const shopData = props.shop;
    return (

        <React.Fragment>
            {shopData == 'loading'
                ? <Loading />
                : <Card sx={{ m:2 }} 
                variant="outlined">
                    <CardActionArea
                        sx={{
                            backgroundImage: `url(${shopData.feature_image})`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `center`
                        }} >
                        <Box sx={{ background: `linear-gradient(rgba(0,0,0,0.8), transparent,${shopData.color}aa 90%)`, }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    position: 'relative'
                                }}>
                                <Box sx={{ flexGrow: 1 }} component={Link} to={`/${shopData.id}`} />
                                <IconButton href={`tel:${shopData.contact.phone}`}>
                                    <Phone />
                                </IconButton>
                                <IconButton href={`https://maps.google.com/?ll=20.166352243507365, 92.90348695547647`}>
                                    <LocationOn />
                                </IconButton>
                                <IconButton href={`https://www.google.com/maps/dir/20.1364047,92.8964863/20.1664273,92.903457/@20.1400114,92.8849429,14.5z`}>
                                    <Directions />
                                </IconButton>
                            </Box>
                            <CardContent
                                component={Link}
                                to={`/${shopData.id}`}
                                sx={{
                                    position: `relative`,
                                    // textAlign:'center',
                                    minHeight: `160px`,
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    flexDirection: 'column',
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}><br />
                                <Typography gutterBottom variant="h6" component="div" >
                                    {shopData.name}
                                </Typography>
                            </CardContent>
                        </Box>
                    </CardActionArea>
                </Card>
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