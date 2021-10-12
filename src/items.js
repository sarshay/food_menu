import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemThumbnail from './template/item';
import { Card, CardActionArea, CardContent, CardMedia, Drawer, Hidden, SwipeableDrawer, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import Box from '@mui/material/Box';

export default function Items() {
    const [state, setState] = React.useState({
        item_id: null,
        isopen: false
    });

    const toggleDrawer = (item_id, isopen) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({
            item_id: item_id,
            isopen: isopen
        })
    };

    const item_detail = (item_id) => (
        <div className="container s">
            <Box
                role="presentation"
                onKeyDown={toggleDrawer(item_id, false)}
                sx={{
                    p: 2,
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {item_id}<ShareSharpIcon />
                </Typography>
                {item_id}<br />
                {item_id}<br />
                {item_id}<br />
                {item_id}<br />
                {item_id}<br />
            </Box>
        </div>
    );

    return (
        <div className="container s">
            <ImageList>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} onClick={toggleDrawer(item.title, true)}>
                        <ItemThumbnail {...item} />
                    </ImageListItem >
                ))}
            </ImageList>
            <SwipeableDrawer
                anchor='bottom'
                open={state.isopen}
                onClose={toggleDrawer(state.item_id, false)}
                onOpen={toggleDrawer(state.item_id, true)}
            >
                {item_detail(state.item_id)}
            </SwipeableDrawer>
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea Food',
        author: '@peterlaster',
    }
];
