import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { SwipeableDrawer } from '@mui/material';
import QrReader from 'react-qr-reader';
import { useHistory } from "react-router-dom";


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
                    <IconButton color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <StyledFab color="secondary" aria-label="add">
                        <TheQrReader />
                    </StyledFab>
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
            // history.push(result);
            window.location.href = result;
        }
    }
    return (
        <React.Fragment>
            <QrCodeScannerIcon onClick={qrOpener(true)} />
            <SwipeableDrawer
                className="container s"
                anchor='bottom'
                open={qrOpen}
                onClose={qrOpener(false)}
                onOpen={qrOpener(true)}
            >
                {qrOpen ?
                    <div style={{ height: '80vh' }}>
                        
                        <QrReader
                            delay={300}
                            style={{ width: '300px' }}
                            onError={handleErrorScan}
                            onScan={handleScan}
                        />

                    </div>
                    :
                    ''}
            </SwipeableDrawer>
        </React.Fragment>

    )
}