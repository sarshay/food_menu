import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemThumbnail from './template/item';
import { CardMedia, SwipeableDrawer, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';

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
    }
    const item_detail = (i) => (
        <div className="container s" style={{ height: '90vh', overflow: 'auto' }}>

            <CardMedia
                component="img"
                height="250"
                image={`${i.img}?w=200&fit=crop&auto=format`}
                alt={i.title}
                loading="lazy"
            />
            <Box
                role="presentation"
                onKeyDown={toggleDrawer(i, false)}
                sx={{
                    p: 2,
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {i.title}
                </Typography>
            </Box>
        </div>
    );
    // category List gen
    const categories = []
    itemData.map((item) => {
        item.category.map((cat) => {
            if (!categories.includes(cat)) {
                categories.push(cat);
            }
        })
    });
    return (
        <div className="container s" style={{ transition: '1s' }}>
            <Paper square elevation={0} className='container s sticky top0'>
                <Tabs
                    value={selectCat}
                    onChange={updateSelectCategory}
                    scrollButtons="auto"
                    variant="scrollable"
                >
                    <Tab label="အားလုံး" value={null} />

                    {categories.map((cat) => (
                        <Tab key={cat} label={cat} value={cat} />
                    ))}
                </Tabs>
            </Paper>
            <ImageList>
                {itemData.map((item, i) => {
                    if (item.category.includes(selectCat) || selectCat == null) {
                        return (
                            <ImageListItem key={i} onClick={toggleDrawer(item, true)}>
                                <ItemThumbnail {...item} />
                            </ImageListItem >
                        )
                    }
                })}
            </ImageList>
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