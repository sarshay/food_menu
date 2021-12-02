import * as React from 'react';
import { Badge, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grow, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, SwipeableDrawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { lang } from '../../components/message';
import { Cancel, CheckCircle } from '@mui/icons-material/';

export default function ItemDetail(i) {
    return (
        <div className="container s" >
            <CardMedia
                component="img"
                height="auto"
                image={`${i.img}?w=200&fit=crop&auto=format`}
                alt={i.title}
                loading="lazy"
                className="sticky top0"
            />
            <Paper
                className="glass"
                square elevation={0}
                role="presentation"
                sx={{
                    p: 2,
                    marginTop: '-20px',
                }}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '20px 20px 0px 0px'
                }}
            >
                <Typography gutterBottom variant="h5" component="h1">{i.title}</Typography>
                <p>{i.description}</p>

                <Specifications {...i} />

            </Paper>
        </div>
    )
};


function Specifications(props) {
    const [dialog, setDialog] = React.useState({
        data: null,
        isopen: false,
    });

    const handleClickOpen = (d, s) => (event) => {
        setDialog({
            data: d,
            isopen: true
        });
    };

    const handleClose = () => {
        setDialog({
            isopen: false
        });
    };
    const handleSave = () => {
        localStorage.setItem('cart','tasting');
        setDialog({
            isopen: false
        });
    };

    return (
        <React.Fragment>
            <List>
                {
                    props.price.map((p) => (
                        <ListItem
                            key={p.key}
                            disablePadding
                            sx={{ borderBottom: `1px solid` }}
                        >
                            <ListItemButton role={undefined} onClick={handleClickOpen({ id: props.id, title: props.title, key: p.key, price: p.value}, true)} dense>
                                <ListItemText primary={p.key} />
                                <ListItemText align="right" primary={`${p.value.toLocaleString('en-US')} ${lang().kyat}`} />
                            </ListItemButton>
                        </ListItem>
                    )
                    )
                }
            </List>
            <Dialog
                className="glass"
                open={dialog.isopen}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {
                    dialog.isopen&&
                    <>
                    <DialogTitle>{dialog.data.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                        {dialog.data.key} - {`${dialog.data.price.toLocaleString('en-US')} ${lang().kyat}`}
                        </DialogContentText>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} endIcon={<Cancel />} aria-label="cancel"> cancel</Button>
                        <Button onClick={handleSave} endIcon={<CheckCircle />} aria-label="save" > save</Button>
                    </DialogActions>
                    </>
                }
                
            </Dialog>
        </React.Fragment >
    )
}
