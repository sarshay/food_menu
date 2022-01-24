import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { DeliveryDining, Directions, Home, LocationOn, Phone, ShoppingCart } from "@mui/icons-material";
import ShareSharp from '@mui/icons-material/ShareSharp';
import { Badge, Button } from '@mui/material';
import { lang } from '../message';
import TheQrReader from './the-qr-reader';

export function ShopBar(props) {
    const share = () => {
        var data = {
            title: props.name,
            text: props.description,
            url: window.location
        }
        navigator
            .share(data)
            .then(() => {
                console.log('Successfully shared');
            })
            .catch(error => {
                console.error('Something went wrong sharing the blog', error);
            });
    }
    return (
        <AppBar
            component="div"
            className="glass"
            color="primary"
            sx={{ height: 0, position: 'fixed', top: 0, bottom: 'auto' }}>
            <Toolbar id="sarchayShopBar" sx={{ px: 1 }} style={{ background: `linear-gradient(${props.color},transparent)` }}>

                <div
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >{props.name}</div>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton href={`tel:${props.contact.phone}`}>
                    <Phone />
                </IconButton>
                <IconButton href={`https://goo.gl/maps/6Vo8oLGWjGubDeBZA`}>
                    <LocationOn />
                </IconButton>
                <IconButton onClick={share}>
                    <ShareSharp />
                </IconButton>

            </Toolbar>
        </AppBar>
    );
}


export default function SarshayBar() {

    const [cCart, setCCart] = React.useState(JSON.parse(localStorage.getItem('cart'))||[]);
    
    React.useEffect(() => {
        const updateCart = window.setInterval(() => {
          setCCart(JSON.parse(localStorage.getItem('cart'))||[]); // <-- Change this line!
        }, 3000);
        return () => {
          window.clearInterval(updateCart);
        };
      }, []);

    return (
        <AppBar
            component="div"
            className="glass"
            color="primary"
            sx={{ position: 'fixed', top: 'auto', bottom: 0 }}>
            <Toolbar sx={{ px: 1 }} variant="dense">
                <Button sx={{ flexGrow: 1 }} component={Link} to="/" color="inherit" aria-label="open drawer">
                    <Home />
                </Button>
                <Box sx={{ flexGrow: 1 }} />

                <TheQrReader />
                <Button sx={{ flexGrow: 1 }} component={Link} to="/" endIcon={
                    <Badge badgeContent={cCart.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                }>
                </Button>

            </Toolbar>
        </AppBar>
    );
}

