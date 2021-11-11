import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemThumbnail from './ItemThumbnail';
import { Button, CardMedia, Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import { borderRadius } from '@mui/system';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { lang } from '../../components/message';

// fetfrom api url

export default function Items(props) {
    const itemData = props.data
    const [state, setState] = React.useState({
        item: null,
        isopen: false,
    });
    const [selectCat, setselectCat] = React.useState(null);

    const toggleDrawer = (item, isopen) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({
            item: item,
            isopen: isopen
        })
    };

    const updateSelectCategory = (event, newValue) => {
        setselectCat(newValue)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const item_detail = (i) => (
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
                onKeyDown={toggleDrawer(i, false)}
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

                <Specifications {...i.price} />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1,
                        m: 1,
                    }}
                >
                    <Button variant="outlined" endIcon={<DeliveryDiningIcon />}>
                        {lang().sendMe}
                    </Button>
                </Box>
            </Paper>


            <div style={{ position: 'fixed', top: '0', left: '0', zIndex: '1' }}>
                <IconButton onClick={toggleDrawer(i, false)} sx={{ p: 2 }}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
        </div>
    );
    // category List gen
    const categories = []
    itemData.map((item) => {
        item.category.map((cat) => {
            if (!categories.some(item => item.id === cat.id)) {
                categories.push(cat);
            }
        })
    });
    return (
        <div className="container s" style={{ transition: '1s' }}>

            {/* အမျိုးအစားခွဲရန် */}
            {itemData.length > 0 ?//ပစည်းရှိမှပြ
                <Paper square elevation={0} className='glass container s sticky top0' style={{paddingTop:40}}>
                    <Tabs
                        value={selectCat}
                        onChange={updateSelectCategory}
                        scrollButtons="auto"
                        variant="scrollable"
                    >
                        <Tab label={lang().all} value={null} />

                        {categories.map((cat) => (
                            <Tab key={cat} label={cat.label} value={cat.id} />
                        ))}
                    </Tabs>
                </Paper> : ''
            }
            {/* အစားအစာများအား ItemThumbnail ဖြင့်ပြရန် */}
            <ImageList>
                {itemData.map((item, i) => {
                    if (item.category.some(c => c.id === selectCat) || selectCat == null) {
                        return (
                            <ImageListItem key={i} onClick={toggleDrawer(item, true)}>
                                <ItemThumbnail {...item} />
                            </ImageListItem >
                        )
                    }
                })}
            </ImageList>
            {/* ကြည့်လို့သော အစားအနစာများကို အပြည့်စုံပြရန် Drawer */}
            <SwipeableDrawer
                className="container s"
                anchor='bottom'
                open={state.isopen}
                onClose={toggleDrawer(state.item, false)}
                onOpen={toggleDrawer(state.item, true)}
            >
                {state.item == null ? '' : item_detail(state.item)}
            </SwipeableDrawer>
        </div>
    );
}

function Specifications(prices) {
    console.log(prices);
    return (
        <React.Fragment>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">
                                <Typography variant="div" component="small" color="text.secondary">{lang().price}</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Object.keys(prices).map(key => {
                                return (
                                    <TableRow key={key}>
                                        <TableCell>{key}</TableCell>
                                        <TableCell align="right">{prices[key].toLocaleString('en-US')}&nbsp;{lang().kyat}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </React.Fragment>
    )
}