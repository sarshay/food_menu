import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { SwipeableDrawer } from '@mui/material';
import QrReader from 'react-qr-reader';
import { Link, useHistory } from "react-router-dom";
import beep from './../media/beep-02.mp3'


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

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

function TheQrReader() {
    let history = useHistory();
    const [qrOpen, setqrOpen] = React.useState(false);
    const [qrResult, setqrResult] = React.useState(null);

    const qrOpener = (isopen) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setqrOpen(isopen)
    };

    const handleErrorScan = (error) => {
        console.log(error)
    }
    const handleScan = (result) => {
        if (result !== null) {
            console.log(result);
            setqrOpen(false)
            // window.location.href = result;
            // window.location.href = '?hello';
            var pathArray = result.split('/');
            var protocol = pathArray[0];
            var path = pathArray[3];
            var host = pathArray[2];


            let audio = new Audio(beep)
            if (window.location.origin.split('/')[2] == host) {
                // our host 
                // play sound
                audio.play()
                history.push(path);
            }
            else {
                // others url
                window.location.href = result;
            }
        }
    }

    return (
        <React.Fragment>
            <StyledFab color="primary" aria-label="scan qr" onClick={qrOpener(true)} >
                <QrCodeScannerIcon />
            </StyledFab>

            {qrOpen ?
                <SwipeableDrawer
                    className="container s"
                    anchor='bottom'
                    open={qrOpen}
                    onClose={qrOpener(false)}
                    onOpen={qrOpener(true)}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 1,
                            m: 1,
                            height: '80vh',
                        }}
                    >
                        <QrReader
                            delay={300}
                            style={{ width: '300px' }}
                            onError={handleErrorScan}
                            onScan={handleScan}
                        />
                    </Box>
                </SwipeableDrawer>
                :
                ''}
        </React.Fragment>

    )
}