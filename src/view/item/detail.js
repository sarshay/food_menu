import * as React from 'react';
import { Badge, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grow, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, SwipeableDrawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
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
    const [dialog, setDialog] = React.useState(false);
    const [iDetail, setIDetail] = React.useState(null);
    const [nOfItem, setNOfItem] = React.useState(null);
    const [newNOfItem, setNewNOfItem] = React.useState(null);


    const handleClickOpen = (d, n) => (event) => {
        setDialog(true);
        setIDetail(d);
        setNOfItem(n);
        setNewNOfItem(n);
    };
    const handleClose = () => {
        setDialog(false);
        setNewNOfItem(null);
    };
    const handleSave = () => {
        var cart = JSON.parse(localStorage.getItem('cart'));//လက်ရှိတောင်း
        var addItem = { ...iDetail, n: newNOfItem };//ဂုထည့်ဖို့စော်
        if (cart) {//တစ်ခုခုရှိရေခါ
            if (cart.find((x) => x.uniqueId == iDetail.uniqueId)) {//ဂုထည့်ဖို့စော်item နဲ့ တူမတူကြည့်ရေ
                //တူစော် index  ကိုရှာ
                var theIndex = cart.findIndex(x => x.uniqueId == iDetail.uniqueId);
                cart[theIndex] = addItem;//updated လုပ်

            }
            else {//မတူ
                cart.push(addItem)
            }

            localStorage.setItem('cart', JSON.stringify(cart))
        }
        else (//တစ်ခုလဲ မရှိခါ
            localStorage.setItem('cart', JSON.stringify([addItem]))
        )

        // localStorage.setItem('cart', JSON.stringify({...iDetail, n: dialog.numberOfItem}));
        setDialog(false);
        setNewNOfItem(null);
    };
    var cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    var prices = props.item.price;
    return (
        <React.Fragment>
            <List>
                {
                    prices.map((p, i) => (
                        <>
                            <ListItem
                                key={p.i}
                                disablePadding
                                sx={{ borderBottom: `1px solid` }}
                            >
                                <ListItemButton role={undefined}
                                    onClick={
                                        handleClickOpen(
                                            {
                                                uniqueId: `${props.shop_id}_${props.item.id}_${i}`,
                                                shop_id: props.shop_id, //ဆိုင် id
                                                shop_name: props.shop_name, //တိုင် name
                                                id: props.item.id, //အစားအစာ id
                                                title: props.item.title, //အစားအစာ နာမည်
                                                key: p.key,//အစားအစာ အရွယ်စား
                                                price: p.value,//အစားအစာ ဈေး
                                            },
                                            cart.find((x) => x.uniqueId == `${props.shop_id}_${props.item.id}_${i}`)
                                                ? cart[cart.findIndex(x => x.uniqueId == `${props.shop_id}_${props.item.id}_${i}`)].n
                                                : 1//ဇာနခုလဲ //ပြောင်လဲနိုင်
                                        )}
                                    dense>
                                    <ListItemText primary={p.key} />
                                    <ListItemText align="right" primary={`${p.value.toLocaleString('en-US')} ${lang().kyat}`} />
                                </ListItemButton>
                            </ListItem>
                        </>
                    ))
                }
            </List>
            <Dialog
                className="glass"
                open={dialog}
                // TransitionComponent={Transition}
                // keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {
                    dialog &&
                    <>
                        <DialogTitle>{iDetail.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                {iDetail.key}
                                <Divider />
                                {`${iDetail.price.toLocaleString('en-US')} ${lang().kyat}`}
                            </DialogContentText>
                            <br />
                            {/* numberOfItem ကိုပြောင်းပါ */}
                            <TextField
                                variant="standard"
                                label={lang().nOfItems}
                                type="number"
                                InputProps={{ inputProps: { min: 1 } }}
                                defaultValue={nOfItem}
                                onChange={e => setNewNOfItem(e.target.value)}
                            />
                            <br />
                            x {newNOfItem} = {`${(newNOfItem * iDetail.price).toLocaleString('en-US')} ${lang().kyat}`}
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose} endIcon={<Cancel />} aria-label="cancel">cancel</Button>
                            <Button onClick={handleSave} endIcon={<CheckCircle />} aria-label="save" >save</Button>
                        </DialogActions>
                    </>
                }

            </Dialog>
        </React.Fragment >
    )
}
