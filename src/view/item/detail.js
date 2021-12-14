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
                image={`${i.item.img}?w=200&fit=crop&auto=format`}
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
                <Typography gutterBottom variant="h5" component="h1">{i.item.title}</Typography>
                <p>{i.item.description}</p>

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
        var cart = JSON.parse(localStorage.getItem('cart'));//လက်ရှိတောင်း
        var addItem = dialog.data;//ဂုထည့်ဖို့စော်
        if (cart) {//တစ်ခုခုရှိရေခါ
            cart.find((x) => x.id == dialog.data.id)
                ? 
                console.log(cart.findIndex(x => x.id == dialog.data.id))
                :
                cart.push(addItem)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        else (//တစ်ခုလဲ မရှိခါ
            localStorage.setItem('cart', JSON.stringify([addItem]))
        )

        setDialog({
            isopen: false
        });
    };

    return (
        <React.Fragment>
            <List>
                {
                    props.item.price.map((p) => (
                        <ListItem
                            key={p.key}
                            disablePadding
                            sx={{ borderBottom: `1px solid` }}
                        >
                            <ListItemButton role={undefined}
                                onClick={
                                    handleClickOpen({
                                        shop_id: props.shop_id, //ဆိုင် id
                                        shop_name: props.shop_name, //တိုင် name
                                        id: props.item.id, //အစားအစာ id
                                        title: props.item.title, //အစားအစာ နာမည်
                                        key: p.key,//အစားအစာ အရွယ်စား
                                        price: p.value,//အစားအစာ ဈေး
                                        n: 1//ဇာနခုလဲ
                                    }, true
                                    )} dense>
                                <ListItemText primary={p.key} />
                                <ListItemText align="right" primary={`${p.value.toLocaleString('en-US')} ${lang().kyat}`} />
                            </ListItemButton>
                        </ListItem>
                    ))
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
                    dialog.isopen &&
                    <>
                        <DialogTitle>{dialog.data.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                {dialog.data.key} - {`${dialog.data.price.toLocaleString('en-US')} ${lang().kyat}`}
                            </DialogContentText>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} endIcon={<Cancel />} aria-label="cancel"></Button>
                            <Button onClick={handleSave} endIcon={<CheckCircle />} aria-label="save" > add</Button>
                        </DialogActions>
                    </>
                }

            </Dialog>
        </React.Fragment >
    )
}
