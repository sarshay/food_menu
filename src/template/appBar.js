import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useHistory } from "react-router-dom";
import TheQrReader from './../the-qr-reader'

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="sticky" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButton component={Link} to="/" color="inherit" aria-label="open drawer">
                        <HomeIcon />
                    </IconButton>
                    <TheQrReader />
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
