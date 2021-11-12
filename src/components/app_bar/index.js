import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link} from "react-router-dom";
import { Directions, Home, LocationOn, Phone } from "@mui/icons-material";
import ShareSharp from '@mui/icons-material/ShareSharp';

export default function ShopBar(props) {
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
            <Toolbar id="sarchayShopBar" sx={{p:0}} style={{ background: `linear-gradient(${props.color},transparent)` }}>
                <IconButton component={Link} to="/" color="inherit" aria-label="open drawer">
                    <Home />
                </IconButton>
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
                <IconButton href={`https://maps.google.com/?ll=20.166352243507365, 92.90348695547647`}>
                    <LocationOn />
                </IconButton>
                <IconButton href={`https://www.google.com/maps/dir/20.1364047,92.8964863/20.1664273,92.903457/@20.1400114,92.8849429,14.5z`}>
                    <Directions />
                </IconButton>
                <IconButton onClick={share}>
                    <ShareSharp />
                </IconButton>

            </Toolbar>
        </AppBar>
    );
}
