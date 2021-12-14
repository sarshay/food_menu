import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemThumbnail from './ItemThumbnail';
import { Button, CardMedia, Grow, IconButton, SwipeableDrawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import { lang } from '../../components/message';
import { TransitionGroup } from 'react-transition-group';
import ItemDetail from './detail';
import ArrowBack from '@mui/icons-material/ArrowBack';
// fetfrom api url

export default function Items(props) {
    //props = shop_id
    const itemData = props.items;
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
        var offset = document.getElementById("itemShow").offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    // category List gen
    const categories = []
    itemData.map((item, i) => (
        <React.Fragment key={i}>
            {item.category.map((cat) => (
                <React.Fragment key={cat.id}>
                    {!categories.some(item => item.id === cat.id) ? categories.push(cat) : ''}
                </React.Fragment>
            ))}
        </React.Fragment>
    ));
    return (
        <div className="container s" id="itemShow" style={{ transition: '1s' }}>

            {/* အမျိုးအစားခွဲရန် */}
            {itemData.length > 0 &&//ပစည်းရှိမှပြ
                <Paper square elevation={0} className='glass container s sticky top0' style={{ paddingTop: 60 }}>
                    <Tabs
                        value={selectCat}
                        onChange={updateSelectCategory}
                        scrollButtons="auto"
                        variant="scrollable"
                    >
                        <Tab label={lang().all} value={null} />

                        {categories.map((cat) => (
                            <Tab key={cat.id} label={cat.label} value={cat.id} />
                        ))}
                    </Tabs>
                </Paper>
            }
            {/* အစားအစာများအား ItemThumbnail ဖြင့်ပြရန် */}
            <TransitionGroup>
                <ImageList cols={2} sx={{ transform: 'translateZ(0)' }}>
                    {itemData.map((item, i) => (
                        <React.Fragment key={i}>
                            {
                                item.category.some(c => c.id === selectCat) || selectCat === null
                                    ? <Grow
                                        in={true}
                                        out={true}
                                        {...{ timeout: 1000 }}
                                        style={{ transformOrigin: '0 0 0', transitionDelay: `${i * 70}ms` }}
                                    >
                                        <ImageListItem onClick={toggleDrawer(item, true)}>
                                            <ItemThumbnail {...item} />
                                        </ImageListItem >
                                    </Grow>
                                    : ''
                            }
                        </React.Fragment>
                    ))}
                </ImageList>
            </TransitionGroup>
            {/* ကြည့်လို့သော အစားအစာများကို အပြည့်စုံပြရန် Drawer */}
            <SwipeableDrawer
                className="container s"
                anchor='bottom'
                open={state.isopen}
                onClose={toggleDrawer(state.item, false)}
                onOpen={toggleDrawer(state.item, true)}

                onKeyDown={toggleDrawer(state.item, false)}
            >
                {state.item !== null && <ItemDetail item={state.item} shop_id = {props.id} shop_name={props.name}/>}
                <div style={{ position: 'fixed', top: '0', left: '0', zIndex: '1' }}>
                    <IconButton onClick={toggleDrawer(state.item, false)} sx={{ p: 2 }}>
                        <ArrowBack />
                    </IconButton>
                </div>
            </SwipeableDrawer>
        </div>
    );
}
